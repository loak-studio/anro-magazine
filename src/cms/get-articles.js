import { api } from "./config";

const getArticles = async ({ lang }) =>
  await (await fetch(api + "/api/articles?populate=*&pagination[pageSize]=99&locale=" + lang)).json();

export { getArticles };
