import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // --INSERT--
  // const user = await prisma.user.create({
  //   data: {
  //     name: "John",
  //     email: "john@gmail.com"
  //   }
  // })


  // --SELECT--
  // const users = await prisma.user.findMany()
  // console.log(users)

  // const user = await prisma.user.create({
  //   data: {
  //     name: "Jane",
  //     email: "jane@gmail.com", 
  //     posts: {
  //       create: {
  //         title: "Hello, Prisma"
  //       }
  //     }
  //   }
  // })


  // const userWithPosts = await prisma.user.findMany({
  //   include: {
  //     posts: true
  //   }
  // })

  // console.dir(userWithPosts, { depth: null })

  // const updateUsers = await prisma.user.update({
  //   where: {
  //     email: "john@gmail.com"
  //   },
  //   data: {
  //     name: "Jogn Doe"
  //   }
  // })
  // console.log(updateUsers)

  const deleteUser = await prisma.user.delete({
    where: {
      id: 1
    }
  })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })