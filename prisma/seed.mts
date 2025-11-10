import { Role, TicketPriority, TicketStatus } from '@/lib/generated/prisma/client'
import { faker } from '@faker-js/faker'
import { prisma } from '@/lib/db/prisma'
import 'dotenv/config'

async function main() {
  console.log('🌱 Start seeding...')

  // =====================
  // 1️⃣ Seed Users
  // =====================
  const usersData = Array.from({ length: 10 }).map((_, i) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    Role: i < 2 ? Role.ADMIN : Role.USER,
  }))

  await prisma.user.createMany({ data: usersData })
  console.log(`✅ Created ${usersData.length} users`)

  // =====================
  // 2️⃣ Seed Categories
  // =====================
  const categoryNames = [
    'Network Issue',
    'Hardware Problem',
    'Software Bug',
    'Access Request',
    'Other'
  ]

  const categoriesData = categoryNames.map((name) => ({
    name,
    description: faker.lorem.sentence(),
  }))

  await prisma.category.createMany({ data: categoriesData })
  console.log(`✅ Created ${categoriesData.length} categories`)

  // Fetch created users & categories (needed for relational seeds)
  const allUsers = await prisma.user.findMany()
  const allCategories = await prisma.category.findMany()

  // =====================
  // 3️⃣ Seed Tickets
  // =====================
  const ticketsData = Array.from({ length: 30 }).map(() => {
    const creator = faker.helpers.arrayElement(
      allUsers.filter((u) => u.Role === Role.USER)
    )
    const assignedTo = faker.helpers.arrayElement(
      allUsers.filter((u) => u.Role === Role.ADMIN)
    )
    const category = faker.helpers.arrayElement(allCategories)

    const statuses = [TicketStatus.OPEN, TicketStatus.IN_PROGRESS, TicketStatus.RESOLVED]
    const status = faker.helpers.arrayElement(statuses)

    const priorities = [TicketPriority.LOW, TicketPriority.MEDIUM, TicketPriority.HIGH, TicketPriority.URGENT]
    const priority = faker.helpers.arrayElement(priorities)

    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      status,
      priority,
      creatorId: creator.id,
      assignedId: assignedTo.id,
      categoryId: category.id,
    }
  })

  await prisma.ticket.createMany({ data: ticketsData })
  console.log(`✅ Created ${ticketsData.length} tickets`)

  console.log('🌿 Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
})