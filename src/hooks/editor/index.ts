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
export const useEditor = () => {
  const ref = useRef<EditorJS>();
  const [triggerSave, setTriggerSave] = useState<boolean>(false);
  const rawData = {
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
      data: rawData,
    });
    ref.current = editor;
  };

  const saveDocument = () => {};

  useEffect(() => {
    if (ref.current) {
      alert(triggerSave)
      saveDocument();
    }
  }, [triggerSave]);
  useEffect(() => {
    MountEditor();
  }, []);
  return { saveDocument, setTriggerSave, triggerSave };
};
