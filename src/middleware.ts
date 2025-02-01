import { defineMiddleware } from "astro:middleware"
import { SCORE_API_ENDPOINT, getSecret } from "astro:env/server"

export const onRequest = defineMiddleware(async (context, next) => {
  const res = await fetch(SCORE_API_ENDPOINT)
  const scoreValue = await res.text()
  context.locals.scoreValue = scoreValue.trim()

  const showMyButtonValue = getSecret("SHOW_BUY_BUTTON")
  context.locals.showMyButton = showMyButtonValue

  return next()
})
