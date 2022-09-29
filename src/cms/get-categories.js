import {api} from "./config"

const getCategories = async({lang}) => await (await fetch(api + '/api/categories?locale='+lang)).json()

export {getCategories}