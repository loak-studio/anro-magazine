import {api} from "./config"

const getCategories = async({lang}) => await (await fetch(api + '/api/categories?sort=title:asc&locale='+lang)).json()

export {getCategories}