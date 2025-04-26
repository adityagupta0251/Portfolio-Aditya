// middleware.js
import { clerkMiddleware } from "@clerk/nextjs/server";

// Default export of the middleware function
export default clerkMiddleware();

// Define the matcher for which routes run through this middleware
export const config = {
  matcher: [
    // Skip Next.js internals and static file requests
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always protect API and tRPC routes
    '/(api|trpc)(.*)',
  ],
};
