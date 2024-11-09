<script>
	import '../app.css';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<header>
	<nav>
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/services" class:active={$page.url.pathname === '/services'}>Services</a>
		<a href="/history" class:active={$page.url.pathname === '/history'}>History</a>
		<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact Us</a>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>© {new Date().getFullYear()} Feet on the Go</p>
	<p>Professional Foot Care Services in Kitchener-Waterloo</p>
</footer>

<style>
	header {
		@apply bg-gray-50 p-4 shadow-sm;
	}

	nav {
		@apply max-w-7xl mx-auto flex gap-8 flex-wrap justify-center;
	}

	nav a {
		@apply text-gray-800 no-underline text-xl px-4 py-2 rounded-md 
		transition-colors hover:bg-gray-200;
	}

	nav a.active {
		@apply bg-blue-600 text-white;
	}

	main {
		@apply my-8 min-h-[calc(100vh-200px)];
	}

	footer {
		@apply bg-gray-50 py-8 px-4 text-center mt-8;
	}

	footer p {
		@apply my-2 text-base;
	}

	@media (max-width: 600px) {
		nav {
			@apply flex-col items-center gap-2;
		}
	}
</style>