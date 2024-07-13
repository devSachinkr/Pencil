import { z } from "zod";

export const createTeamSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

export const createFileSchema = z.object({
  fileName: z.string().min(1, { message: "File name is required" }).max(255, {
    message: "File name is too long",
  }),
});
export type documentType =
  | {
      time: number;
      blocks: Array<{
        id: string;
        type: string;
        data: {
          text: string;
          level?: number;
          style?: string;
          items?: Array<string>;
        };
      }>;
      version: string;
    }
  | null
  | undefined;
