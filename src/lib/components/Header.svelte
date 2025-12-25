<script lang="ts">
	import { navigation, siteConfig } from '$lib/data/content';
	import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 border-b border-dust-sand/20" style="background-color: rgb(240, 234, 224);">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3" onclick={closeMobileMenu}>
				<img
					src="/images/GRIND Logo.webp"
					alt="{siteConfig.name} Logo"
					class="h-12 w-auto"
				/>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:gap-8">
				{#each navigation as item}
					<a
						href={item.href}
						class="text-sm font-medium text-urban-charcoal hover:text-grit-orange transition-colors duration-200 {$page.url.pathname === item.href ? 'text-grit-orange' : ''}"
					>
						{item.name}
					</a>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<button
				type="button"
				class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-urban-charcoal hover:text-grit-orange hover:bg-dust-sand/20 transition-colors"
				onclick={toggleMobileMenu}
				aria-expanded={mobileMenuOpen}
				aria-label="Toggle navigation menu"
			>
				{#if mobileMenuOpen}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-dust-sand/20 py-4">
				<div class="flex flex-col gap-2">
					{#each navigation as item}
						<a
							href={item.href}
							class="block px-4 py-3 text-base font-medium text-urban-charcoal hover:text-grit-orange hover:bg-dust-sand/10 rounded-lg transition-colors {$page.url.pathname === item.href ? 'text-grit-orange bg-dust-sand/10' : ''}"
							onclick={closeMobileMenu}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>
</header>
