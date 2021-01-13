import { AppContext } from "next/app";

export function readCookie(cookieName: string, context: AppContext) {
  var re = new RegExp("[; ]" + cookieName + "=([^\\s;]*)");
  var sMatch = (" " + context.ctx?.req?.headers.cookie).match(re);
  if (cookieName && sMatch) return unescape(sMatch[1]);
  return "";
}
