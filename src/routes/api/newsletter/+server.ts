//import type { fail, type Actions } from "@sveltejs/kit";
import type { RequestHandler } from "./$types"

// I'm a little teapot
export const GET: RequestHandler = async (event) => {
    const options: ResponseInit = {
        status: 418,
        headers: {
            CodeCode: "Short and Stout",
            'Content-Type': 'application/json'
        }
    }

    const obj = { Get: "teapot", Short: "Stout" };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
        type: "application/json",
    })

    return new Response(blob, options)
}

// Subscribe to newsletter the sveltekit way
// This only works in +page.server.ts
// export const actions: Actions = {
//     subscribe: async ({ request }) => {
//         const formData = await request.formData()
//         const email = formData.get('email')

//         if (!email) {
//             return fail(400, { missing: true })
//         }

//         return {success: true}
//     }
// }

// Subscribe to newsletter
export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    var success = true
    var status = 200

    if (!email) {
        success = false
        status = 200
    }

    const body = JSON.stringify({ success: success })
    const options: ResponseInit = {
        status: status,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return new Response(body, options)
}