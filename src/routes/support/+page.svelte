<script lang="ts">
	import { siteConfig, waysToSupport } from '$lib/data/content';
</script>

<svelte:head>
	<title>Support Our Work | {siteConfig.name}</title>
	<meta name="description" content="Support THE GRIND COLLECTIVE. Your support fuels collaborative, youth-centered innovation across Chicago." />
	<meta property="og:title" content="Support Our Work | {siteConfig.name}" />
	<meta property="og:description" content="Support our mission to create equitable pathways for Black and Brown youth in Chicago." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				How to Support GRIND
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				Your support fuels collaborative, youth-centered innovation across Chicago.
			</p>
		</div>
	</div>
</section>

<!-- Ways to Support -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-urban-charcoal mb-8">Ways to Support:</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
			{#each waysToSupport as way}
				<div class="bg-off-white rounded-xl p-6 flex items-start gap-4">
					<span class="flex-shrink-0 w-10 h-10 bg-grit-orange rounded-full flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</span>
					<span class="text-lg text-urban-charcoal font-medium">{way}</span>
				</div>
			{/each}
		</div>

		<div class="bg-grit-orange rounded-2xl p-8 md:p-12 text-center">
			<h3 class="text-2xl font-bold text-white mb-4">Make a Donation</h3>
			<p class="text-white/90 mb-6 max-w-2xl mx-auto">
				The GRIND Collective is a registered 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law.
			</p>
			<a
				href={siteConfig.donateUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center px-8 py-4 bg-white text-grit-orange font-bold rounded-full hover:bg-off-white transition-colors duration-200 shadow-lg"
			>
				Donate Now
				<svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="bg-urban-charcoal text-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h2>
			<p class="text-xl text-white/80 mb-8">
				Ready to be part of a movement that's transforming how we invest in youth potential? Reach out to us.
			</p>

			<div class="bg-white/10 rounded-2xl p-8 inline-block">
				<div class="flex flex-col sm:flex-row items-center justify-center gap-6">
					<div class="flex items-center gap-3">
						<span class="w-10 h-10 bg-grit-orange rounded-full flex items-center justify-center">
							<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
							</svg>
						</span>
						<a
							href="mailto:{siteConfig.email}"
							class="text-lg text-white hover:text-electric-ochre transition-colors"
						>
							{siteConfig.email}
						</a>
					</div>

					<div class="flex items-center gap-3">
						<span class="w-10 h-10 bg-grit-orange rounded-full flex items-center justify-center">
							<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
							</svg>
						</span>
						<span class="text-lg text-white">{siteConfig.phone}</span>
					</div>
				</div>
			</div>

			<p class="mt-8 text-white/60 text-sm">
				EIN: {siteConfig.ein}
			</p>
		</div>
	</div>
</section>
