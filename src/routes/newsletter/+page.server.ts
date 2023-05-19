import { fail } from '@sveltejs/kit'
import { addUser } from '$lib/server/database/user'
import { sleep } from '$lib/utils/main'

export const actions = {
    subscribe: async ({ request }) => {
        const formData = await request.formData()
        const email = formData.get('email')

        await sleep(2000)

        //Validate email

        if (!email) {
            return fail(404, { email, success: false, msg: "Email required!", submitted: true })
        }

        const result = await addUser(String(email), true)

        return result ? { msg: 'Thanks for subscribing! 🥳', success: true, submitted: true } : fail(420, { msg: 'Subscription failed!', email, success: false, submitted: true })
    }
}