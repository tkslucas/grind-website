<script lang="ts">
	import { siteConfig } from '$lib/data/content';
</script>

<svelte:head>
	<title>Get Involved | {siteConfig.name}</title>
	<meta name="description" content="Join THE GRIND COLLECTIVE. Whether you're an educator, funder, researcher, or community leader, there's a place for you in our network." />
	<meta property="og:title" content="Get Involved | {siteConfig.name}" />
	<meta property="og:description" content="Join our movement to create equitable pathways for Black and Brown youth in Chicago." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				Get Involved
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				Whether you're an educator, innovator, researcher, or community leader, there's a place for you in The GRIND Collective.
			</p>
		</div>
	</div>
</section>

<!-- Ways to Engage -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Partner With Us -->
			<div class="bg-off-white rounded-2xl p-8">
				<div class="w-14 h-14 bg-grit-orange rounded-xl flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-urban-charcoal mb-3">Partner With Us</h3>
				<p class="text-urban-charcoal/70 mb-6">
					Join our network of universities, schools, community organizations, and creative industries working together to create change.
				</p>
				<a
					href="mailto:info@grindcollective.org?subject=Partnership Inquiry"
					class="inline-flex items-center text-grit-orange font-semibold hover:text-rusted-copper transition-colors"
				>
					Learn More
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
			</div>

			<!-- Fiscal Sponsorship -->
			<div class="bg-off-white rounded-2xl p-8">
				<div class="w-14 h-14 bg-grit-orange rounded-xl flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-urban-charcoal mb-3">Seek Fiscal Sponsorship</h3>
				<p class="text-urban-charcoal/70 mb-6">
					Have a social impact project? Let GRIND be your legal and financial home so you can focus on your mission.
				</p>
				<a
					href="mailto:info@grindcollective.org?subject=Fiscal Sponsorship Inquiry"
					class="inline-flex items-center text-grit-orange font-semibold hover:text-rusted-copper transition-colors"
				>
					Apply Now
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
			</div>

			<!-- Support Our Work -->
			<div class="bg-off-white rounded-2xl p-8">
				<div class="w-14 h-14 bg-grit-orange rounded-xl flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-urban-charcoal mb-3">Support Our Work</h3>
				<p class="text-urban-charcoal/70 mb-6">
					Your support helps us build equitable pathways for Black and Brown youth in Chicago through programs and partnerships.
				</p>
				<a
					href="mailto:info@grindcollective.org?subject=Supporting GRIND"
					class="inline-flex items-center text-grit-orange font-semibold hover:text-rusted-copper transition-colors"
				>
					Get in Touch
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="bg-urban-charcoal text-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold mb-6">Let's Connect</h2>
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
							href="mailto:info@grindcollective.org"
							class="text-lg text-white hover:text-electric-ochre transition-colors"
						>
							info@grindcollective.org
						</a>
					</div>

					<div class="flex items-center gap-3">
						<span class="w-10 h-10 bg-grit-orange rounded-full flex items-center justify-center">
							<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
							</svg>
						</span>
						<span class="text-lg text-white">{siteConfig.location}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Quote/Commitment Section -->
<section class="bg-grit-orange text-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<blockquote class="text-2xl sm:text-3xl font-bold italic">
				"{siteConfig.brandSpirit}"
			</blockquote>
		</div>
	</div>
</section>
