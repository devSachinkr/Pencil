"use client";
import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useModal } from "@/hooks/modal";

type Props = {
  children: React.ReactNode;
  title: string;
  desc?: string;
  content?: React.ReactNode;
  cardTitle?: string;
  cardDesc?: string;
};

const DialogBox = ({
  content,
  children,
  title,
  desc,
  cardDesc,
  cardTitle,
}: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full relative" asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-col items-start">
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Card className="w-full">
            <CardHeader>
              {cardTitle && <CardTitle>{cardTitle}</CardTitle>}
              {cardDesc && <CardDescription>{cardDesc}</CardDescription>}
            </CardHeader>
            <CardContent>{content}</CardContent>
          </Card>

          <AlertDialogCancel className="absolute right-4 top-4">
            <X size={16} />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogBox;
