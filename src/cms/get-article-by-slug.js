import {api} from "./config"

const getArticleBySlug = async({lang,slug}) => await (await fetch(api + `/api/articles?filters[slug]=${slug}&populate=*&locale=`+lang)).json()

export {getArticleBySlug}