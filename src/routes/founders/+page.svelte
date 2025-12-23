<script lang="ts">
	import { siteConfig, founders } from '$lib/data/content';
</script>

<svelte:head>
	<title>Founders & Visionaries | {siteConfig.name}</title>
	<meta name="description" content="Meet the founders and visionaries of THE GRIND COLLECTIVE." />
	<meta property="og:title" content="Founders & Visionaries | {siteConfig.name}" />
	<meta property="og:description" content="Meet the team behind THE GRIND COLLECTIVE." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				Founders & Visionaries
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				Meet the founders and visionaries behind The GRIND Collective.
			</p>
		</div>
	</div>
</section>

<!-- Founders Section -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-urban-charcoal mb-12">Founders of The GRIND Collective</h2>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			{#each founders as founder}
				<div class="bg-off-white rounded-2xl p-8">
					<div class="mb-6">
						<img
							src={founder.image}
							alt={founder.name}
							class="w-32 h-32 rounded-full object-cover mx-auto mb-4"
						/>
						<h3 class="text-xl font-bold text-urban-charcoal flex items-center justify-center gap-2">
							{founder.name}
							<a
								href={founder.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								class="text-grit-orange hover:text-rusted-copper transition-colors"
								aria-label="LinkedIn profile for {founder.name}"
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</a>
						</h3>
						<p class="text-grit-orange font-medium mt-1 text-center">{founder.title}</p>
						<p class="text-urban-charcoal/60 text-sm mt-1 text-center">{founder.role}</p>
					</div>
					<p class="text-urban-charcoal/70">
						{founder.bio}
					</p>
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
