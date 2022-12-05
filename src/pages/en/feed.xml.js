import rss from "@astrojs/rss";
import i18next, { t, changeLanguage } from "i18next";
import { getArticles } from "../../cms/get-articles";
changeLanguage("en");
export const get = async () => {
  const { data } = await getArticles({ lang: i18next.language });
  return rss({
    title: "ANRÓ Magazine",
    description: t("meta.description"),
    site: import.meta.env.SITE,
    items: data.map((post) => ({
      link: "/en/article/" + post.attributes.slug,
      title: post.attributes.name,
      pubDate: post.attributes.date,
      description: post.attributes.description,
    })),
    customData: `<language>${i18next.language}</language>`,
  });
};
