import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'c98f103a-24f6-409a-a03b-42654c96773b',
            title: 'Unite summit',
            slug: 'unite-summit',
            details: 'Um evento p/ devs apaixonados(as) por código!',
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log('Database seeded!');
    prisma.$disconnect();
})