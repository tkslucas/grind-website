<script lang="ts">
	import { siteConfig, mission, services } from '$lib/data/content';
	import { partners, partnersWithLogos } from '$lib/data/partners';
	import { onMount } from 'svelte';

	const typedWords = ['build futures.', 'create change.', 'lead boldly.', 'innovate.', 'GRIND.'];
	let currentWordIndex = $state(0);
	let currentText = $state('');
	let isDeleting = $state(false);
	let showCursor = $state(true);

	onMount(() => {
		const typeSpeed = 120;
		const deleteSpeed = 80;
		const pauseEnd = 1500;
		const pauseStart = 500;

		let timeout: ReturnType<typeof setTimeout>;

		function type() {
			const currentWord = typedWords[currentWordIndex];

			if (!isDeleting) {
				currentText = currentWord.slice(0, currentText.length + 1);

				if (currentText === currentWord) {
					// Pause at end of word, then start deleting
					timeout = setTimeout(() => {
						isDeleting = true;
						type();
					}, pauseEnd);
					return;
				}
			} else {
				currentText = currentWord.slice(0, currentText.length - 1);

				if (currentText === '') {
					isDeleting = false;
					currentWordIndex = (currentWordIndex + 1) % typedWords.length;
					timeout = setTimeout(type, pauseStart);
					return;
				}
			}

			timeout = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
		}

		// Cursor blink
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 530);

		// Start typing after initial delay
		timeout = setTimeout(type, 800);

		return () => {
			clearTimeout(timeout);
			clearInterval(cursorInterval);
		};
	});
</script>

<svelte:head>
	<title>{siteConfig.name} | {siteConfig.tagline}</title>
	<meta name="description" content="{mission.statement}" />
	<meta property="og:title" content="{siteConfig.name}" />
	<meta property="og:description" content="{siteConfig.tagline}" />
	<meta property="og:type" content="website" />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[90vh] bg-urban-charcoal overflow-hidden flex items-center">
	<!-- Animated geometric shapes -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Large circle -->
		<div class="absolute -top-32 -right-32 w-96 h-96 border-[3px] border-grit-orange/20 rounded-full animate-spin-slow"></div>
		<!-- Medium circle -->
		<div class="absolute top-1/2 -left-20 w-64 h-64 border-[2px] border-electric-ochre/15 rounded-full animate-pulse-slow"></div>
		<!-- Diagonal lines -->
		<div class="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-grit-orange/10 to-transparent"></div>
		<div class="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-dust-sand/10 to-transparent"></div>
		<!-- Corner accent -->
		<div class="absolute bottom-0 right-0 w-72 h-72">
			<div class="absolute bottom-0 right-0 w-full h-full border-t-[3px] border-l-[3px] border-grit-orange/20 rounded-tl-[100px]"></div>
		</div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
			<!-- Left side - Bold statement -->
			<div class="order-1 lg:order-1">
				<p class="text-grit-orange font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
					Chicago 501(c)(3)
				</p>
				<h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.9] animate-fade-in animation-delay-100">
					THE GRIND<br/>
					<span class="text-grit-orange">COLLECTIVE</span>
				</h1>
				<div class="mt-8 animate-fade-in animation-delay-200">
					<p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90">
						We <span class="text-electric-ochre">{currentText}</span><span class="inline-block w-[3px] h-[0.8em] bg-electric-ochre ml-1 align-middle {showCursor ? 'opacity-100' : 'opacity-0'}"></span>
					</p>
				</div>
				<div class="mt-10 flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
					<a
						href="/get-involved"
						class="group inline-flex items-center px-8 py-4 bg-grit-orange text-white font-bold rounded-full hover:bg-electric-ochre transition-all duration-300 shadow-lg shadow-grit-orange/25 hover:shadow-electric-ochre/25 hover:scale-105"
					>
						Join the Movement
						<svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
					<a
						href="/about"
						class="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
					>
						Learn More
					</a>
				</div>
			</div>

			<!-- Right side - Statement block -->
			<div class="order-2 lg:order-2 flex justify-center lg:justify-end">
				<div class="relative">
					<!-- Accent block behind -->
					<div class="absolute -top-4 -left-4 w-full h-full bg-grit-orange/20 rounded-2xl"></div>
					<!-- Main content block -->
					<div class="relative bg-off-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 max-w-md">
						<p class="text-lg sm:text-xl text-white/80 leading-relaxed">
							Building <span class="text-grit-orange font-semibold">equitable pathways</span> for Black and Brown youth through science, technology, creativity, and social impact.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>

<!-- Mission Section -->
<section class="bg-urban-charcoal text-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
			<p class="text-lg sm:text-xl text-white/80 leading-relaxed">
				{mission.statement}
			</p>
			<p class="mt-6 text-electric-ochre font-medium text-lg">
				{mission.tagline}
			</p>
		</div>
	</div>
</section>

<!-- What We Do Section -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal">What We Offer</h2>
			<p class="mt-4 text-lg text-urban-charcoal/70 max-w-2xl mx-auto">
				We operate as a collaborative ecosystem supporting partners and communities.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
			{#each services.slice(0, 3) as service, index}
				<div
					class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-dust-sand/20"
				>
					<div class="w-12 h-12 bg-grit-orange/10 rounded-xl flex items-center justify-center mb-6">
						<svg class="w-6 h-6 text-grit-orange" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
							{#if service.icon === 'building'}
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
							{:else if service.icon === 'lightbulb'}
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
							{:else if service.icon === 'chart'}
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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

		<div class="mt-12 text-center">
			<a
				href="/programs"
				class="inline-flex items-center px-6 py-3 text-grit-orange font-semibold hover:text-rusted-copper transition-colors group"
			>
				View All Programs
				<svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Partners Section -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20 overflow-hidden">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal">Our Network</h2>
			<p class="mt-4 text-lg text-urban-charcoal/70">
				Proud to collaborate with <span class="text-grit-orange font-semibold">{partners.length}+</span> organizations
			</p>
		</div>
	</div>

	<!-- Infinite Logo Marquee -->
	<div class="relative">
		<!-- Gradient overlays for seamless fade -->
		<div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
		<div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

		<div class="flex animate-marquee">
			<!-- First set of logos -->
			{#each partnersWithLogos as partner}
				<div class="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
					<img
						src={partner.logo}
						alt={partner.name}
						class="max-h-16 max-w-full object-contain"
					/>
				</div>
			{/each}
			<!-- Duplicate for seamless loop -->
			{#each partnersWithLogos as partner}
				<div class="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
					<img
						src={partner.logo}
						alt={partner.name}
						class="max-h-16 max-w-full object-contain"
					/>
				</div>
			{/each}
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mt-12 text-center">
			<a
				href="/impact"
				class="inline-flex items-center px-6 py-3 text-grit-orange font-semibold hover:text-rusted-copper transition-colors group"
			>
				View All Partners
				<svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-grit-orange py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
				Ready to Join the Movement?
			</h2>
			<p class="text-lg text-white/90 mb-8">
				Whether you're an educator, innovator, researcher, or community leader, there's a place for you in The GRIND Collective.
			</p>
			<a
				href="/get-involved"
				class="inline-flex items-center px-8 py-4 bg-white text-grit-orange font-semibold rounded-full hover:bg-off-white transition-colors duration-200 shadow-lg"
			>
				Get Involved Today
			</a>
		</div>
	</div>
</section>
