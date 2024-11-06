import { query } from './_generated/server'

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('tasks').collect()
  },
})

export const getAuth = query(async (ctx) => {
  try {
    return await ctx.auth.getUserIdentity()
  } catch (e) {
    return JSON.stringify(e)
  }
})
