"use cilent";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
//@ts-ignore
import List from "@editorjs/list";
//@ts-ignore
import Checklist from "@editorjs/checklist";
//@ts-ignore
import Quote from "@editorjs/quote";
import { useEffect, useRef, useState } from "react";
import { documentType } from "@/types";
import { useConvex, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import ToastNotify from "@/components/global/toast-notify";
import { useFile } from "@/providers/file-provider";

export const useEditor = () => {
  const ref = useRef<EditorJS>();

  const {
    workspaceId,
    triggerSave,
    setTriggerSave,
    setInitialWhiteBoardData,
    initialWhiteBoardData,
  } = useFile();
  const [documentData, setDocumentData] = useState<documentType>();
  const convex = useConvex();
  const updateDocument = useMutation(api.files.updateDocument);
  const dummyData = {
    time: 1550476186479,
    blocks: [
      {
        data: {
          text: "Document Name",
          level: 2,
        },
        id: "1",
        type: "header",
      },
    ],
    version: "2.8.1",
  };
  const MountEditor = () => {
    const editor = new EditorJS({
      tools: {
        header: Header,
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        quote: Quote,
      },
      holder: "editorjs",
      data: documentData ?? dummyData,
    });
    ref.current = editor;
  };

  const saveDocument = async () => {
    if (ref.current) {
      try {
        const data = await ref.current?.save();
        console.log(data);
        updateDocument({
          //@ts-ignore
          _id: workspaceId!,
          document: JSON.stringify(data),
        });
        //@ts-ignore
        ToastNotify({
          title: "Success",
          msg: "Document updated successfully ",
        });
      } catch (error) {
        console.log(error);
        ToastNotify({
          title: "Oops!",
          msg: "Something went wrong",
        });
      }
    }
  };

  const getDocuments = async () => {
    try {
      const res = await convex.query(api.files.getDocument, {
        // @ts-ignore
        _id: workspaceId!,
      });
      console.log(res)
      setDocumentData(JSON.parse(res.document) ?? {});
      setInitialWhiteBoardData(JSON.parse(res.whiteBoard) ?? {});
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    documentData && MountEditor();
  }, [documentData]);
  useEffect(() => {
    saveDocument();
  }, [triggerSave]);
  useEffect(() => {
    getDocuments();
  }, [workspaceId]);

  return { saveDocument, setTriggerSave, triggerSave, MountEditor };
};
