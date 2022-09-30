import {api} from "./config"

const getCategoryArticles = async({lang, categoryId}) => await (await fetch(api + `/api/articles?filters[categories][id][$eq]=${categoryId}&populate=*&sort=date:desc&locale=`+lang)).json()

export {getCategoryArticles}