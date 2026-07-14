import { defineRelations, defineRelationsPart } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelationsPart(schema, (r) => ({
  user: {
    accounts: r.one.user({
      from: r.user.id,
      to: r.account.userId,
    }),
    sessions: r.one.user({
      from: r.user.id,
      to: r.session.userId,
    }),
  },
  account: {
    user: r.one.account({
      from: r.account.userId,
      to: r.user.id,
    }),
  },
  session: {
    user: r.one.session({
      from: r.session.userId,
      to: r.user.id,
    }),
  }
}));