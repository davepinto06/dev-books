import { defineMiddleware } from "astro:middleware"
import { SCORE_API_ENDPOINT, getSecret } from "astro:env/server"

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    // Fetch score from API
    const res = await fetch(SCORE_API_ENDPOINT)

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }

    const scoreValue = await res.text()
    context.locals.scoreValue = scoreValue.trim()

    // Get feature flag
    const showBuyButtonValue = getSecret("SHOW_BUY_BUTTON")
    context.locals.showMyButton = showBuyButtonValue === "true" // Convert to boolean

    return next()
  } catch (error) {
    console.error("Middleware error:", error)
    // Handle error appropriately
    return new Response("Internal Server Error", { status: 500 })
  }
})
