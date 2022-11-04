import { api } from "./config";

const getArticles = async ({ lang }) => {
  let data = [];
  const req = await (
    await fetch(api + "/api/articles?populate=*&locale=" + lang)
  ).json();
  data = req.data;
  console.log("Getting articles page =>", req.meta.pagination.page);
  for (
    let currentPage = req.meta.pagination.page + 1;
    currentPage <= req.meta.pagination.pageCount;
    currentPage++
  ) {
    const currentReq = await (
      await fetch(
        api +
          `/api/articles?populate=*&pagination[page]=${currentPage}&locale=` +
          lang
      )
    ).json();
    console.log("Getting articles page =>", currentReq.meta.pagination.page);
    data = [...data, ...currentReq.data];
  }
  return { data };
};

export { getArticles };
