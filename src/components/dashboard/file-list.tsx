"use cilent";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { useFile } from "@/providers/file-provider";
import { TABLE_HEAD } from "@/constants";
import TableBodyCell from "./_components";

type Props = {};
const FileList = (props: Props) => {
  const { fileData, loading } = useFile();
  return (
    <div className="mt-3 w-full">
      <h2 className=" text-xl text-muted-foreground">FileList</h2>

      <div className="flex flex-col mt-4">
        <Table>
          <TableCaption>A list of all your files</TableCaption>
          <TableHeader>
            <TableRow>
              {TABLE_HEAD.map((head) => (
                <TableHead key={head.name}>{head.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="w-full">
            <TableBodyCell fileData={fileData} loading={loading} />
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FileList;
