import type { AvailableLanguageTag } from "@/paraglide/runtime.js";

type AbsolutePathname = `/${string}`;

export function localizePathname(
  pathname: AbsolutePathname,
  locale: AvailableLanguageTag
) {
  return `/${locale}${pathname}`;
}

export function unlocalizePathname(pathname?: string) {
  if (!pathname) return "/";
  const [, _locale, remainingPathname] = pathname.split("/");

  return remainingPathname?.length > 0 ? `/${remainingPathname}` : "/";
}
