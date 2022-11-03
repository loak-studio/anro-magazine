import { api } from "./config";

const getLegal = async ({ lang }) =>
  await (await fetch(api + "/api/mentions-legale?locale=" + lang)).json();

export { getLegal };
