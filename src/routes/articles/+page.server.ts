import db from "$lib/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const posts = await db.post.findMany({
        take: 5,
        select: {
            title: true,
            slug: true
        }
    })

    if (!posts) {
        throw error(404, 'Articles not found')
    }

    return { posts }
}