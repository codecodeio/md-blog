import db from '$lib/database'

export async function addUser(email: string, subscribed: boolean) {
    try {
        await db.user.create({
            data: {
                email: email,
                subscribed: subscribed
            }
        })
        return true
    } catch (e) {
        //create() fails when not unique for user
        console.log(e)
        return false
    }
}