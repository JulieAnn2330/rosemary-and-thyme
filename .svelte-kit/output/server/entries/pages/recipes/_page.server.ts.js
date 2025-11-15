import { p as prisma } from "../../../chunks/db.js";
async function load() {
  const recipes = await prisma.recipe.findMany({ orderBy: { createdAt: "desc" } });
  return { recipes };
}
export {
  load
};
