<script lang="ts">
	import { siteConfig } from '$lib/data/content';
	import { partners } from '$lib/data/partners';
</script>

<svelte:head>
	<title>Current Members | {siteConfig.name}</title>
	<meta name="description" content="Our collective network of institutional, community, and creative partners across Chicago and beyond." />
	<meta property="og:title" content="Current Members | {siteConfig.name}" />
	<meta property="og:description" content="Meet our network of partners and collaborators." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				Our Collective Network
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				The GRIND Collective is powered by a diverse network of institutional, community, and creative partners across Chicago and beyond.
			</p>
		</div>
	</div>
</section>

<!-- Members Grid -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-urban-charcoal mb-8">Current Members Include:</h2>

		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
			{#each partners as partner}
				<div class="bg-off-white rounded-lg px-4 py-4 text-center hover:bg-grit-orange/10 transition-colors duration-200">
					<span class="text-urban-charcoal/80 text-sm font-medium">{partner}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-grit-orange py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
				Join Our Network
			</h2>
			<p class="text-lg text-white/90 mb-8">
				Want to be part of The GRIND Collective? We welcome new partners and collaborators.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href="/support"
					class="inline-flex items-center px-8 py-4 bg-white text-grit-orange font-semibold rounded-full hover:bg-off-white transition-colors duration-200 shadow-lg"
				>
					Partner With Us
				</a>
				<a
					href={siteConfig.donateUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center px-8 py-4 bg-urban-charcoal text-white font-semibold rounded-full hover:bg-urban-charcoal/80 transition-colors duration-200"
				>
					Support Our Work
				</a>
			</div>
		</div>
	</div>
</section>
