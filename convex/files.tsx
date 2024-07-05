import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createFile = mutation({
  args: {
    fileName: v.string(),
    teamId: v.string(),
    createdBy: v.string(),
    archived: v.boolean(),
    document: v.string(),
    whiteBoard: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const res = await ctx.db.insert("files", args);
      if (res) return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
});

export const getFiles = query({
  args: {
    teamId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const res = ctx.db
        .query("files")
        .filter((q) => q.eq(q.field("teamId"), args.teamId))
        .collect();

      if (res) return res;
    } catch (error) {
      console.log(error);
    }
  },
});
