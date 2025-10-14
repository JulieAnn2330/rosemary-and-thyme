import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create a sample user
  const user = await prisma.user.create({
    data: {
      email: 'jules@example.com',
      recipes: {
        create: [
          {
            title: 'Lemon Thyme Roast Chicken',
            description: 'A cozy dinner with citrus and herbs.',
            ingredients: ['chicken', 'lemon', 'thyme', 'garlic', 'olive oil'],
            instructions: [
              'Preheat oven to 400°F',
              'Rub chicken with olive oil and herbs',
              'Roast for 60 minutes or until golden brown',
            ],
          },
        ],
      },
    },
  })

  console.log('Seeded user and recipe:', user)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
