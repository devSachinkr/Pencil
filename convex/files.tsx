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
        .order("desc")
        .collect();

      if (res) return res;
    } catch (error) {
      console.log(error);
    }
  },
});

export const updateDocument = mutation({
  args: {
    _id: v.id("files"),
    document: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      await ctx.db.patch(args._id, { document: args.document }).then((res) => {
        return res;
      });
    } catch (error) {
      console.log(error);
    }
  },
});

export const getDocument = query({
  args: {
    _id: v.id("files"),
  },
  handler: async (ctx, args) => {
    try {
      const res = await ctx.db.get(args._id);
      if (res) return res;
    } catch (err) {
      console.log(err);
    }
  },
});

export const updateWhiteBoard = mutation({
  args: {
    _id: v.id("files"),
    whiteBoard: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      await ctx.db.patch(args._id, { whiteBoard: args.whiteBoard }).then((res) => {
        return res;
      });
    } catch (error) {
      console.log(error);
    }
  },
});