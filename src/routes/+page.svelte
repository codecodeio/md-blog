<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit'

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

<center>
	<h1>Write. Share. Learn. Repeat.</h1>
	<blockquote style="max-width:600px">
		"Contribution - Giving something to help achieve a goal."
		<footer>
			<cite>- Dictionary</cite>
		</footer>
	</blockquote>
</center>

<div class="grid">
	<div><article>Write!</article></div>
	<div><article>Share!</article></div>
	<div><article>Learn!</article></div>
	<div><article>Repeat!</article></div>
</div>

<div class="container-fluid">
	<center><h3>Latest</h3></center>
	<div class="grid">
		<div><article>article 1</article></div>
		<div><article>article 2</article></div>
	</div>
</div>

<h3>Subscribe 📬</h3>
<div>
	<form method="POST" action="/newsletter?/subscribe" use:enhance={subscribeValidate}>
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
