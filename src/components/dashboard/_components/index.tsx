"use cilent";

import { Spinner } from "@/components/global/spinner";
import { TableCell, TableRow } from "@/components/ui/table";
import { FILE_SCHEMA } from "@/constants";
import React from "react";
import moment from "moment";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Archive, Link2, MoreHorizontal, Trash, Trash2 } from "lucide-react";
import DropDownMenu from "@/components/global/drop-down-menu";
import Link from "next/link";
import { Tooltips } from "@/components/global/tooltip";
type Props = {
  fileData: FILE_SCHEMA[];
  loading: boolean;
};

const TableBodyCell = ({ fileData, loading }: Props) => {
  const { user } = useKindeBrowserClient();
  let filesData = fileData.map((file) => {
    return {
      id: file?._id,
      createdAt: file?._creationTime,
      createdBy: file?.createdBy,
      archived: file?.archived,
      name: file?.fileName,
    };
  });
  console.log(filesData);
  return fileData.length ? (
    filesData.map((file) => (
      <Spinner loading={loading} key={file.id}>
        <TableRow className="mt-5">
          <TableCell key={file.id}>
            <span className="flex items-center gap-3">
              <Link
                href={`workspace/${file.id}`}
                className="p-2 px-2 rounded-md bg-accent flex items-center hover:bg-accent/75"
              >
                <Tooltips name="Go to workspace">
                  <Link2 />
                </Tooltips>
              </Link>
              {file.name}
            </span>
          </TableCell>
          <TableCell>{file.createdBy}</TableCell>
          <TableCell>{moment(file.createdAt).format("DD MMM YYYY")}</TableCell>
          <TableCell>
            {user?.email === file.createdBy ? (
              <Avatar>
                <AvatarImage src={user?.picture!} />
                <AvatarFallback>PF</AvatarFallback>
              </Avatar>
            ) : (
              <p>Undefined</p>
            )}
          </TableCell>
          <TableCell>
            <DropDownMenu
              menuTrigger={<MoreHorizontal />}
              lable="Options"
              action={
                <span className="flex items-center justify-center gap-3 ">
                  <Archive size={16} />
                  <p>Archive</p>
                </span>
              }
            />
          </TableCell>
        </TableRow>
      </Spinner>
    ))
  ) : (
    <TableRow>
      <TableCell className="text-muted-foreground text-2xl">
        No file {" (create now!)"}
      </TableCell>
    </TableRow>
  );
};

export default TableBodyCell;
