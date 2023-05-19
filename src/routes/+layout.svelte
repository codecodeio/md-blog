<script lang="ts">
	import { page } from '$app/stores'
	import '@picocss/pico'
	import '../lib/app.css'
	import { json } from '@sveltejs/kit'
</script>

<svelte:head>
	<title>
		{$page.data.post?.title ? $page.data.post.title : 'Markdown Blog : Write Share Learn Repeat'}
	</title>
</svelte:head>
<nav>
	<ul>
		<li><h1><a href="/">Markdown Blog</a></h1></li>
	</ul>
	<ul>
		<li><a href="/articles">Articles</a></li>
		<li>
			<details role="list" dir="rtl">
				<summary aria-haspopup="listbox" role="link">Categories</summary>
				<ul role="listbox">
					<li><a href="/categories/macOS">macOS</a></li>
					<li><a href="/categories/git">Git</a></li>
					<li><a href="/categories/stoicism">Stoicism</a></li>
				</ul>
			</details>
		</li>
		<li><a href="/newsletter">Newsletter</a></li>
	</ul>
</nav>

<slot />

<footer>
	<div class="grid">
		<div>
			<article>
				<a href="/">Markdown Blog</a>
				&bullet;
				<a href="/newsletter">Newsletter</a>
			</article>
		</div>
	</div>
	<!-- <pre>{JSON.stringify($page, null, 2)}</pre> -->
</footer>

<style>
	:global(.error) {
		color: #b71c1c;
	}
	:global(.visible) {
		visibility: visible;
	}
	:global(.invisible) {
		visibility: hidden;
	}
</style>
