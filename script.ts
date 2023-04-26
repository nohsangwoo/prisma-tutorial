import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({ log: ["query"] }); // log보는 방법
const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here
    const users = await prisma.user.findMany({
        where: {
            writtenPosts: {
                every: {
                    title: "Test",
                },
            },
        },
    });
    console.log(users);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
