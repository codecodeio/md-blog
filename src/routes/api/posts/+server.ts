import type { RequestHandler } from "./$types";
import db from '$lib/database'
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (event) => {
    const posts = await db.post.findMany({
        take: 5
    })

    event.setHeaders({
        'Cache-Control': 'max-age=60'
    })

    return json(posts)
};