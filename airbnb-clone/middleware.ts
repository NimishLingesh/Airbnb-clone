export { default } from "next-auth/middleware"

// middleware to redirect all the web URI to homepage incase user has not logged in 
export const config = { 
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};