import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const GET = async ({ params }) => {
  const recipe = await prisma.recipe.findUnique({
    where: { id: params.id }
  });
  if (!recipe) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(JSON.stringify(recipe), {
    headers: { "content-type": "application/json" }
  });
};
export {
  GET
};
