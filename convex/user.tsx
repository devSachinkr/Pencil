import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
export const getUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const res = await ctx.db
      .query("user")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();
    return res;
  },
});

const allowedPlans = ["STANDARD", "PREMIUM", "ENTERPRISE"];
const allowedRoles = ["USER", "ADMIN"];


export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    avatar: v.string(),
    plan: v.string(),
    role: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.role) {
      args.role = "USER";
    }
    if (!args.plan) {
      args.plan = "STANDARD";
    }
    if (!allowedRoles.includes(args.role)) {
      throw new Error(`Invalid role value: ${args.role}`);
    }

    if (!allowedPlans.includes(args.plan)) {
      throw new Error(`Invalid plan value: ${args.plan}`);
    }
    const res = await ctx.db.insert("user", args);
    return res;
  },
});
