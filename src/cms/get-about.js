import {api} from "./config"

const getAbout = async({lang}) => await (await fetch(api + '/api/about?populate=*&locale='+lang)).json()

export {getAbout}