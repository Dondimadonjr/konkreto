import type { NextRequest } from "next/server";

export async function proxy(_request: NextRequest) {
  return new Response(null, { status: 204 });
}

export const config = {
  matcher: [],
};
