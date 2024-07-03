"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { useCreateTeam } from "@/hooks/team";
import { Spinner } from "../global/spinner";

type Props = {};

const TeamForm = (props: Props) => {
  const { form, handleCreateForm, loading, isSubmitting } = useCreateTeam();
  return (
    <div className="w-full flex flex-col items-center">
      <Form {...form}>
        <form onSubmit={handleCreateForm} className="space-y-8  mt-4 w-[60%] ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input placeholder="Team name" {...field} />
                </FormControl>
                <FormDescription>Your Team details.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center">
            <Spinner loading={loading}>
              <Button
                type="submit"
                className="mt-5 w-[50%] self-center"
                disabled={isSubmitting}
              >
                Continue
              </Button>
            </Spinner>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TeamForm;
