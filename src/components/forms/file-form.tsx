"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useFile } from "@/hooks/file";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../global/spinner";
import { TEAM } from "@/hooks/team";

const FileForm = () => {
  const { form, loading,handelCreate } = useFile();
  
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handelCreate}>
          <FormField
            control={form.control}
            name="fileName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>File Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter file name" {...field} />
                </FormControl>
                <FormDescription>Your file details.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end">
            <Spinner loading={loading}>
              <Button type="submit" className="mt-5" disabled={loading}>
                Create
              </Button>
            </Spinner>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FileForm;
