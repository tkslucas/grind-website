<script lang="ts">
	import { siteConfig, mission, vision, coreValues, originStory } from '$lib/data/content';
</script>

<svelte:head>
	<title>About | {siteConfig.name}</title>
	<meta name="description" content="Learn about THE GRIND COLLECTIVE - {siteConfig.acronym}. A Chicago-based 501(c)(3) creating equitable pathways for Black and Brown youth." />
	<meta property="og:title" content="About | {siteConfig.name}" />
	<meta property="og:description" content="Learn about THE GRIND COLLECTIVE and our mission to build equitable pathways for youth." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				Who We Are
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				<span class="text-grit-orange font-semibold">GRIND</span> stands for {siteConfig.acronym}
			</p>
		</div>
	</div>
</section>

<!-- Organization Overview -->
<section class="bg-white py-16 lg:py-20 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<div>
				<h2 class="text-3xl font-bold text-urban-charcoal mb-6">
					{siteConfig.name}
				</h2>
				<p class="text-lg text-urban-charcoal/70 mb-4">
					We are a Chicago-based <span class="font-semibold text-urban-charcoal">{siteConfig.type}</span> founded in {siteConfig.founded} and incorporated in {siteConfig.incorporated}.
				</p>
				<p class="text-lg text-urban-charcoal/70">
					We bridge universities, schools, community organizations, and creative industries, creating spaces where youth can learn, create, and thrive.
				</p>
			</div>
			<div class="bg-off-white rounded-2xl p-8 lg:p-12">
				<blockquote class="text-xl italic text-urban-charcoal/80">
					"{siteConfig.brandSpirit}"
				</blockquote>
			</div>
		</div>
	</div>
</section>

<!-- Mission Section -->
<section class="bg-urban-charcoal text-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold mb-8">Our Mission</h2>
			<p class="text-xl text-white/90 leading-relaxed">
				{mission.statement}
			</p>
			<p class="mt-8 text-electric-ochre font-medium text-lg">
				{mission.tagline}
			</p>
		</div>
	</div>
</section>

<!-- Vision Section -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal mb-8">Our Vision</h2>
			<p class="text-xl text-urban-charcoal/80 leading-relaxed">
				{vision.statement}
			</p>
			<p class="mt-8 text-urban-charcoal/70">
				{vision.tagline}
			</p>
		</div>
	</div>
</section>

<!-- Core Values -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal">Our Core Values</h2>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
			{#each coreValues as value}
				<div class="bg-grit-orange text-white rounded-2xl p-6 text-center hover:bg-rusted-copper transition-colors duration-200">
					<h3 class="text-lg font-bold mb-2">{value.name}</h3>
					<p class="text-white/90 text-sm">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Why We Formed -->
<section class="bg-grit-orange text-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl sm:text-4xl font-bold mb-6">
					Why We Formed a 501(c)(3)
				</h2>
				<p class="text-xl text-white/90 mb-8">
					{originStory.summary}
				</p>
				<p class="text-white/80">
					Formalizing as a nonprofit enables us to:
				</p>
			</div>
			<div>
				<ul class="space-y-4">
					{#each originStory.benefits as benefit}
						<li class="flex items-start gap-4">
							<span class="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
								<svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
								</svg>
							</span>
							<span class="text-lg text-white/90">{benefit}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-off-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl font-bold text-urban-charcoal mb-6">
				Join Our Mission
			</h2>
			<p class="text-lg text-urban-charcoal/70 mb-8">
				Ready to be part of a movement that's transforming how we invest in youth potential?
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href="/programs"
					class="inline-flex items-center px-8 py-4 bg-grit-orange text-white font-semibold rounded-full hover:bg-rusted-copper transition-colors duration-200"
				>
					Explore Our Programs
				</a>
				<a
					href="/get-involved"
					class="inline-flex items-center px-8 py-4 bg-urban-charcoal text-white font-semibold rounded-full hover:bg-urban-charcoal/80 transition-colors duration-200"
				>
					Get Involved
				</a>
			</div>
		</div>
	</div>
</section>
