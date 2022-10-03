import {api} from "./config"

const getArticles = async({lang}) => await (await fetch(api + '/api/articles?populate=*&locale='+lang)).json()

export {getArticles}