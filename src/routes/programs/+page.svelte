<script lang="ts">
	import { siteConfig, services, fiscalSponsorshipBenefits, whyChooseGrind, yearOneServices } from '$lib/data/content';
</script>

<svelte:head>
	<title>Programs | {siteConfig.name}</title>
	<meta name="description" content="Explore GRIND Collective's programs including fiscal sponsorship, program design, community research, professional development, and partnership building." />
	<meta property="og:title" content="Programs | {siteConfig.name}" />
	<meta property="og:description" content="Explore our collaborative ecosystem supporting partners and communities." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				What We Offer
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				We operate as a collaborative ecosystem supporting partners and communities through innovative programs and services.
			</p>
		</div>
	</div>
</section>

<!-- All Services -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service}
				<div class="bg-off-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
					<div class="w-14 h-14 bg-grit-orange rounded-xl flex items-center justify-center mb-6">
						<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
							{#if service.icon === 'building'}
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
							{:else if service.icon === 'lightbulb'}
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
							{:else if service.icon === 'chart'}
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
							{:else if service.icon === 'users'}
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
							{:else if service.icon === 'handshake'}
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
							{/if}
						</svg>
					</div>
					<h3 class="text-xl font-bold text-urban-charcoal mb-3">{service.title}</h3>
					<p class="text-urban-charcoal/70">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Fiscal Sponsorship Deep Dive -->
<section class="bg-urban-charcoal text-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold mb-6">What is Fiscal Sponsorship?</h2>
			<p class="text-xl text-white/80">
				A cost-effective pathway for launching social impact projects without forming a separate nonprofit.
			</p>
			<p class="mt-4 text-white/70">
				The GRIND serves as your project's legal and financial home, managing funds and compliance so you can focus on mission impact.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Benefits -->
			<div class="bg-white/10 rounded-2xl p-8">
				<h3 class="text-xl font-bold mb-6 text-electric-ochre">As a Sponsored Project, You Gain:</h3>
				<ul class="space-y-4">
					{#each fiscalSponsorshipBenefits as benefit}
						<li class="flex items-start gap-3">
							<svg class="w-5 h-5 text-electric-ochre flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>
							<span class="text-white/90">{benefit}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Why Choose GRIND -->
			<div class="bg-white/10 rounded-2xl p-8">
				<h3 class="text-xl font-bold mb-6 text-electric-ochre">Why Choose GRIND?</h3>
				<ul class="space-y-4">
					{#each whyChooseGrind as reason}
						<li class="flex items-start gap-3">
							<svg class="w-5 h-5 text-electric-ochre flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>
							<span class="text-white/90">{reason}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Year One Services -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<span class="inline-block bg-grit-orange text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
				Year One
			</span>
			<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal">
				Services for Fiscal Sponsees
			</h2>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
			{#each yearOneServices as service}
				<div class="bg-white rounded-xl p-6 shadow-sm border border-dust-sand/20 flex items-start gap-4">
					<span class="flex-shrink-0 w-8 h-8 bg-grit-orange/10 rounded-full flex items-center justify-center">
						<svg class="w-4 h-4 text-grit-orange" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</span>
					<span class="text-urban-charcoal/80">{service}</span>
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
			<a
				href="/contact"
				class="inline-flex items-center px-8 py-4 bg-white text-grit-orange font-semibold rounded-full hover:bg-off-white transition-colors duration-200 shadow-lg"
			>
				Contact Us
			</a>
		</div>
	</div>
</section>
