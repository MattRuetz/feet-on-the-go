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
	/* Reset and base styles */
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
		font-size: 18px;
		line-height: 1.6;
		color: #333;
	}

	/* Header styles */
	header {
		background-color: #f8f8f8;
		padding: 1rem;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	nav {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		gap: 2rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	nav a {
		color: #333;
		text-decoration: none;
		font-size: 1.25rem;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background-color 0.2s;
	}

	nav a:hover {
		background-color: #e0e0e0;
	}

	nav a.active {
		background-color: #007bff;
		color: white;
	}

	/* Main content area */
	main {
		max-width: 1200px;
		margin: 2rem auto;
		padding: 0 1rem;
		min-height: calc(100vh - 200px);
	}

	/* Footer styles */
	footer {
		background-color: #f8f8f8;
		padding: 2rem 1rem;
		text-align: center;
		margin-top: 2rem;
	}

	footer p {
		margin: 0.5rem 0;
		font-size: 1rem;
	}

	/* Responsive adjustments */
	@media (max-width: 600px) {
		nav {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		nav a {
			width: 100%;
			text-align: center;
		}
	}
</style>

{@render children()}
