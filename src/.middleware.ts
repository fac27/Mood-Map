// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();
//   console.log("middleware");
//   if (!session) return ;
//   return res;
// }

// export const config = {
//   matcher: ["/((?!login).*)"],
// };
