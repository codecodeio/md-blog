<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import type { SubmitFunction } from './$types.js'

	export let form

	let loading = false

	const subscribeValidate: SubmitFunction = (input) => {
		//do something before form submits
		loading = true
		console.log(input)

		return async ({ result, update }) => {
			//do something after form submits
			console.log(result)
			loading = false
			//await update()
			await applyAction(result)
			//console.log(options)
		}
	}
</script>

<h2>Subscribe 📬</h2>
<div>
	<form method="POST" action="?/subscribe" use:enhance={subscribeValidate}>
		<input
			type="email"
			name="email"
			value={form?.email ?? form?.msg ?? ''}
			aria-invalid={form?.submitted && !form?.success ? true : form?.success ? false : null}
			disabled={loading}
		/>
		<button aria-busy={loading} class:secondary={loading} type="submit">
			{#if !loading}
				Subscribe 📬
			{/if}
		</button>

		<p class="error {form?.msg && !form?.success ? 'visible' : 'invisible'}">
			{form?.msg ?? 'NA'}
		</p>
	</form>
</div>
