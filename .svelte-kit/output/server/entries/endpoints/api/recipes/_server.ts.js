import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const GET = async () => {
  const recipes = await prisma.recipe.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, description: true, createdAt: true }
  });
  return new Response(JSON.stringify(recipes), {
    headers: { "content-type": "application/json" }
  });
};
const POST = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title")?.trim();
  const description = form.get("description")?.trim() || null;
  const ingredients = (form.get("ingredients") || "").split("\n").map((s) => s.trim()).filter(Boolean);
  const instructions = (form.get("instructions") || "").split("\n").map((s) => s.trim()).filter(Boolean);
  if (!title) return new Response("Title required", { status: 400 });
  const created = await prisma.recipe.create({
    data: { title, description, ingredients, instructions }
  });
  return new Response(JSON.stringify(created), {
    headers: { "content-type": "application/json" },
    status: 201
  });
};
export {
  GET,
  POST
};
