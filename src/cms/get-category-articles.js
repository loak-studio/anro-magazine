import {api} from "./config"

const getCategoryArticles = async({lang, categorySlug}) => await (await fetch(api + `/api/articles?filters[categories][slug][$eq]=${categorySlug}&populate=*&sort=date:desc&locale=`+lang)).json()

export {getCategoryArticles}