import {api} from "./config"

const getLastArticle = async({lang}) => await (await fetch(api + '/api/articles?populate=*&sort=date:desc&locale='+lang)).json()

export {getLastArticle}