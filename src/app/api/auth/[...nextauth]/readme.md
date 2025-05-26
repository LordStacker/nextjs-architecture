
---

## `src/app/api/auth/[...nextauth]/README.md`

```md
#  [...nextauth] (Dynamic API Route)

This folder is required by `next-auth` to handle all built-in authentication endpoints.

## Captures API routes like:
- /api/auth/signin
- /api/auth/callback/azure-ad
- /api/auth/session
- /api/auth/logout

##  Configured with Azure AD:
Inside `route.ts`, we define the Azure AD provider and export the `GET` and `POST` handlers.

##  route.ts responsibilities:
- Handles login flow
- Secures tokens
- Returns session information
- Manages sign-in / sign-out redirects

##  Important Notes:
- Requires `NEXTAUTH_SECRET`, `AZURE_AD_CLIENT_ID`, `CLIENT_SECRET`, `TENANT_ID` in `.env.local`
- Must export:
```ts
export { handler as GET, handler as POST };
