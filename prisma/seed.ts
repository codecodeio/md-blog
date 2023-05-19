import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

type Post = {
    title: string
    content: string
}

function getPosts() {
    const posts = [
        { title: 'dude', content: 'sweet' },
        { title: 'blam', content: 'alamadingdong' },
        { title: 'How To Install Xubuntu On An Old Mac', content: "When your old Mac can no longer receive updates it's time to install an OS that can receive security updates.I originally wanted to install Ubuntu but I was getting.errors.After two failed attempts I tried a lighter- weight version of Ubuntu called Xubuntu on my 2012 Macbook Air." }
    ]
    return posts as Post[]
}

function slugify(text: string) {
    return text
        .replace(/\s/g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .toLocaleLowerCase()
}

async function main() {
    const posts = getPosts()
    for (const post of posts) {
        await db.post.create({
            data: { title: post.title, content: post.content, slug: slugify(post.title) }
        })
    }
}

main()