<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>Articles</h1>

<div class="grid">
	{#each data.posts as { slug, title }}
		<div><a href="/articles/{slug}"><article>{title}</article></a></div>
	{/each}
</div>
