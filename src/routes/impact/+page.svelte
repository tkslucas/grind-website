<script lang="ts">
	import { siteConfig, commitment } from '$lib/data/content';
	import { partners, partnerCategories } from '$lib/data/partners';
</script>

<svelte:head>
	<title>Impact | {siteConfig.name}</title>
	<meta name="description" content="Explore THE GRIND COLLECTIVE's impact through our network of 50+ partner organizations spanning universities, sports, media, and community organizations." />
	<meta property="og:title" content="Impact | {siteConfig.name}" />
	<meta property="og:description" content="Our network of {partners.length}+ organizations driving change for youth in Chicago." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				Our Impact
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				Through collaboration and collective action, we're building a network that transforms opportunities for Black and Brown youth in Chicago.
			</p>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="bg-urban-charcoal text-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-5xl lg:text-6xl font-bold text-electric-ochre">{partners.length}+</div>
				<div class="mt-2 text-white/70">Partner Organizations</div>
			</div>
			<div>
				<div class="text-5xl lg:text-6xl font-bold text-electric-ochre">40+</div>
				<div class="mt-2 text-white/70">Founding Network Members</div>
			</div>
			<div>
				<div class="text-5xl lg:text-6xl font-bold text-electric-ochre">10+</div>
				<div class="mt-2 text-white/70">Universities</div>
			</div>
			<div>
				<div class="text-5xl lg:text-6xl font-bold text-electric-ochre">2024</div>
				<div class="mt-2 text-white/70">Founded</div>
			</div>
		</div>
	</div>
</section>

<!-- Commitment Section -->
<section class="bg-grit-orange text-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold mb-6">{commitment.headline}</h2>
			<p class="text-xl text-white/90">
				{commitment.description}
			</p>
		</div>
	</div>
</section>

<!-- Partner Network -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal">Our Partner Network</h2>
			<p class="mt-4 text-lg text-urban-charcoal/70">
				We're proud to collaborate with organizations across sectors
			</p>
		</div>

		<!-- Universities -->
		<div class="mb-12">
			<h3 class="text-xl font-bold text-urban-charcoal mb-6 flex items-center gap-2">
				<span class="w-8 h-8 bg-grit-orange/10 rounded-lg flex items-center justify-center">
					<svg class="w-4 h-4 text-grit-orange" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
					</svg>
				</span>
				Universities & Research
			</h3>
			<div class="flex flex-wrap gap-3">
				{#each partnerCategories.universities as partner}
					<span class="px-4 py-2 bg-off-white rounded-full text-sm text-urban-charcoal/80 border border-dust-sand/30">
						{partner}
					</span>
				{/each}
			</div>
		</div>

		<!-- Sports -->
		<div class="mb-12">
			<h3 class="text-xl font-bold text-urban-charcoal mb-6 flex items-center gap-2">
				<span class="w-8 h-8 bg-grit-orange/10 rounded-lg flex items-center justify-center">
					<svg class="w-4 h-4 text-grit-orange" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
					</svg>
				</span>
				Sports & Athletics
			</h3>
			<div class="flex flex-wrap gap-3">
				{#each partnerCategories.sports as partner}
					<span class="px-4 py-2 bg-off-white rounded-full text-sm text-urban-charcoal/80 border border-dust-sand/30">
						{partner}
					</span>
				{/each}
			</div>
		</div>

		<!-- Media -->
		<div class="mb-12">
			<h3 class="text-xl font-bold text-urban-charcoal mb-6 flex items-center gap-2">
				<span class="w-8 h-8 bg-grit-orange/10 rounded-lg flex items-center justify-center">
					<svg class="w-4 h-4 text-grit-orange" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
					</svg>
				</span>
				Media & Entertainment
			</h3>
			<div class="flex flex-wrap gap-3">
				{#each partnerCategories.media as partner}
					<span class="px-4 py-2 bg-off-white rounded-full text-sm text-urban-charcoal/80 border border-dust-sand/30">
						{partner}
					</span>
				{/each}
			</div>
		</div>

		<!-- Community -->
		<div class="mb-12">
			<h3 class="text-xl font-bold text-urban-charcoal mb-6 flex items-center gap-2">
				<span class="w-8 h-8 bg-grit-orange/10 rounded-lg flex items-center justify-center">
					<svg class="w-4 h-4 text-grit-orange" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
					</svg>
				</span>
				Community Organizations
			</h3>
			<div class="flex flex-wrap gap-3">
				{#each partnerCategories.community as partner}
					<span class="px-4 py-2 bg-off-white rounded-full text-sm text-urban-charcoal/80 border border-dust-sand/30">
						{partner}
					</span>
				{/each}
			</div>
		</div>

		<!-- Education -->
		<div class="mb-12">
			<h3 class="text-xl font-bold text-urban-charcoal mb-6 flex items-center gap-2">
				<span class="w-8 h-8 bg-grit-orange/10 rounded-lg flex items-center justify-center">
					<svg class="w-4 h-4 text-grit-orange" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
					</svg>
				</span>
				Education & Youth Development
			</h3>
			<div class="flex flex-wrap gap-3">
				{#each partnerCategories.education as partner}
					<span class="px-4 py-2 bg-off-white rounded-full text-sm text-urban-charcoal/80 border border-dust-sand/30">
						{partner}
					</span>
				{/each}
			</div>
		</div>

		<!-- All Partners -->
		<div class="mt-16 pt-12 border-t border-dust-sand/20">
			<h3 class="text-xl font-bold text-urban-charcoal mb-6 text-center">All Partners</h3>
			<div class="flex flex-wrap justify-center gap-3">
				{#each partners as partner}
					<span class="px-4 py-2 bg-off-white rounded-full text-sm text-urban-charcoal/80 border border-dust-sand/30 hover:border-grit-orange/50 hover:text-grit-orange transition-colors">
						{partner}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-off-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl font-bold text-urban-charcoal mb-6">
				Become a Partner
			</h2>
			<p class="text-lg text-urban-charcoal/70 mb-8">
				Join our growing network of organizations committed to creating equitable pathways for youth.
			</p>
			<a
				href="/get-involved"
				class="inline-flex items-center px-8 py-4 bg-grit-orange text-white font-semibold rounded-full hover:bg-rusted-copper transition-colors duration-200"
			>
				Get Involved
			</a>
		</div>
	</div>
</section>
