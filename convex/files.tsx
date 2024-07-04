import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createFile = mutation({
  args: {
    fileName: v.string(),
    teamId: v.string(),
    createdBy: v.string(),
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
