<script lang="ts">
	import { siteConfig, fiscalSponsorshipIncludes } from '$lib/data/content';
</script>

<svelte:head>
	<title>Fiscal Sponsorship | {siteConfig.name}</title>
	<meta name="description" content="Fiscal sponsorship is a core service of The GRIND Collective. Launch community programs without forming a separate nonprofit." />
	<meta property="og:title" content="Fiscal Sponsorship | {siteConfig.name}" />
	<meta property="og:description" content="A compliant, cost-effective pathway for launching community programs." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				Fiscal Sponsorship at GRIND
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				Fiscal sponsorship is a core service of The GRIND Collective.
			</p>
		</div>
	</div>
</section>

<!-- What is Fiscal Sponsorship -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl">
			<p class="text-lg text-urban-charcoal/70 mb-6">
				We provide a compliant, cost-effective pathway for individuals and groups to launch community programs or pilot new ideas without immediately forming a separate nonprofit.
			</p>
			<p class="text-lg text-urban-charcoal/70">
				Under fiscal sponsorship, projects operate as programs of The GRIND Collective while retaining their own leadership and vision.
			</p>
		</div>
	</div>
</section>

<!-- What's Included -->
<section class="bg-urban-charcoal text-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl sm:text-4xl font-bold mb-12">Fiscal Sponsorship Includes:</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each fiscalSponsorshipIncludes as item}
				<div class="bg-white/10 rounded-xl p-6 flex items-center gap-4">
					<span class="flex-shrink-0 w-10 h-10 bg-grit-orange rounded-full flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</span>
					<span class="text-lg text-white/90">{item}</span>
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
				Ready to Launch Your Project?
			</h2>
			<p class="text-lg text-white/90 mb-8">
				Let's discuss how GRIND Collective can support your mission.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href="mailto:{siteConfig.email}?subject=Fiscal Sponsorship Inquiry"
					class="inline-flex items-center px-8 py-4 bg-white text-grit-orange font-semibold rounded-full hover:bg-off-white transition-colors duration-200 shadow-lg"
				>
					Contact Us
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
