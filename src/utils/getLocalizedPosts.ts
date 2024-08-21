import { languageTag } from "@/paraglide/runtime";
import { getCollection } from "astro:content";

type Filter = Parameters<typeof getCollection<"posts">>[1];

export type Post = Parameters<NonNullable<Filter>>[0];

export async function getLocalizedPosts(locale?: "de" | "en", filter?: Filter) {
  locale = locale ?? languageTag();

  return {
    posts: await getCollection("posts", (post) => {
      return post.id.startsWith(locale) && (filter?.(post) ?? true);
    }),
    locale,
  };
}

function isPublished(entry: Post) {
  return import.meta.env.PROD
    ? entry.data?.isPublish && !entry.data?.isDraft
    : true;
}

export async function getPublishedLocalizedPosts(
  locale?: Parameters<typeof getLocalizedPosts>[0]
) {
  return await getLocalizedPosts(locale, isPublished);
}
