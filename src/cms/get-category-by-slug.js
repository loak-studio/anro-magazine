import {api} from "./config"

const getCategoryBySlug = async({lang,slug}) => await (await fetch(api + `/api/categories?filters[slug]=${slug}&populate=*&locale=`+lang)).json()

export {getCategoryBySlug}