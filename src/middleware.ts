import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin",
  },
});

export const config = {
  matcher: [
    "/hello-world/secret",
    "/advanced/:path*", // Protect everything inside advanced
  ],
};
