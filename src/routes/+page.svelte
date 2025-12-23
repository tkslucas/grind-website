<script lang="ts">
	import { siteConfig, mission, vision, coreValues, originStory } from '$lib/data/content';
	import { partnersWithLogos } from '$lib/data/partners';
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

		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 530);

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
	<!-- Background image -->
	<div class="absolute inset-0">
		<img
			src="/images/events/GRINDConferenceCloseupSpeakers.webp"
			alt="GRIND Conference speakers"
			class="w-full h-full object-cover blur-[3px]"
		/>
		<div class="absolute inset-0 bg-urban-charcoal/80"></div>
	</div>
	<!-- Animated geometric shapes -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute -top-32 -right-32 w-96 h-96 border-[3px] border-grit-orange/20 rounded-full animate-spin-slow"></div>
		<div class="absolute top-1/2 -left-20 w-64 h-64 border-[2px] border-electric-ochre/15 rounded-full animate-pulse-slow"></div>
		<div class="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-dust-sand/10 to-transparent"></div>
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
				<div class="mt-6 animate-fade-in animation-delay-150">
					<p class="text-xl sm:text-2xl text-white/80 italic">
						{siteConfig.tagline}
					</p>
				</div>
				<div class="mt-6 animate-fade-in animation-delay-200">
					<p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90">
						We <span class="text-electric-ochre">{currentText}</span><span class="inline-block w-[3px] h-[0.8em] bg-electric-ochre ml-1 align-middle {showCursor ? 'opacity-100' : 'opacity-0'}"></span>
					</p>
				</div>
				<div class="mt-10 flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
					<a
						href={siteConfig.donateUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-flex items-center px-8 py-4 bg-grit-orange text-white font-bold rounded-full hover:bg-electric-ochre transition-all duration-300 shadow-lg shadow-grit-orange/25 hover:shadow-electric-ochre/25 hover:scale-105"
					>
						Support Our Work
						<svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
					<a
						href="/programs"
						class="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
					>
						Explore Our Programs
					</a>
				</div>
			</div>

			<!-- Right side - Statement block -->
			<div class="order-2 lg:order-2 flex justify-center lg:justify-end">
				<div class="relative">
					<div class="absolute -top-4 -left-4 w-full h-full bg-grit-orange/20 rounded-2xl"></div>
					<div class="relative bg-off-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 max-w-md">
						<p class="text-lg sm:text-xl text-white/80 leading-relaxed">
							The GRIND Collective is a Chicago-based 501(c)(3) organization uniting educators, researchers, creatives, and community leaders to expand access to <span class="text-grit-orange font-semibold">high-quality STEAM learning and innovation pathways</span> for Black and Brown youth.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Who We Are Section -->
<section class="bg-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal mb-6">Who We Are</h2>
				<p class="text-lg text-urban-charcoal/70 mb-6">
					The GRIND Collective was formed in <span class="font-bold text-urban-charcoal">November 2024</span> following the inaugural GRIND Conference, which convened more than 40 organizations across education, sports, media, technology, and community development. The Collective was created to address a shared challenge: siloed systems limit opportunity for youth, while collaboration unlocks scale, sustainability, and impact.
				</p>
				<p class="text-lg text-urban-charcoal/70">
					What began as a convening has grown into a collaborative network and, in 2025, a formally incorporated <span class="font-bold text-urban-charcoal">501(c)(3)</span> organization. GRIND serves as both a programmatic hub and a shared infrastructure for partners working to reimagine youth learning, creativity, and access to opportunity.
				</p>
			</div>
			<div class="relative">
				<div class="absolute -top-4 -right-4 w-full h-full bg-grit-orange/20 rounded-2xl"></div>
				<img
					src="/images/events/GRINDConferenceWiderPhotoParticipants.webp"
					alt="GRIND Conference participants"
					class="relative rounded-2xl shadow-lg w-full object-cover"
				/>
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
		</div>
	</div>
</section>

<!-- Vision Section -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div class="relative order-2 lg:order-1">
				<div class="absolute -top-4 -left-4 w-full h-full bg-grit-orange/20 rounded-2xl"></div>
				<img
					src="/images/events/STEAMSummerCamp_ActivityKids.webp"
					alt="Students engaged in STEAM activities"
					class="relative rounded-2xl shadow-lg w-full object-cover"
				/>
			</div>
			<div class="order-1 lg:order-2">
				<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal mb-8">Our Vision</h2>
				<p class="text-xl text-urban-charcoal/80 leading-relaxed">
					{vision.statement}
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Core Values -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal">Our Values</h2>
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

<!-- Partners Marquee -->
<section class="bg-off-white py-16 lg:py-20 overflow-hidden">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal">Our Network</h2>
			<p class="mt-4 text-lg text-urban-charcoal/70">
				Collaborating with organizations across Chicago and beyond
			</p>
		</div>
	</div>

	<div class="relative">
		<div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-off-white to-transparent z-10"></div>
		<div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-off-white to-transparent z-10"></div>

		<div class="flex animate-marquee">
			{#each partnersWithLogos as partner}
				<div class="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
					<img
						src={partner.logo}
						alt={partner.name}
						class="max-h-16 max-w-full object-contain"
					/>
				</div>
			{/each}
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
				href="/members"
				class="inline-flex items-center px-6 py-3 text-grit-orange font-semibold hover:text-rusted-copper transition-colors group"
			>
				View All Members
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
			<div class="flex flex-wrap justify-center gap-4">
				<a
					href={siteConfig.donateUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center px-8 py-4 bg-white text-grit-orange font-semibold rounded-full hover:bg-off-white transition-colors duration-200 shadow-lg"
				>
					Support Our Work
				</a>
				<a
					href="/founders"
					class="inline-flex items-center px-8 py-4 bg-urban-charcoal text-white font-semibold rounded-full hover:bg-urban-charcoal/80 transition-colors duration-200"
				>
					Meet Our Founders
				</a>
			</div>
		</div>
	</div>
</section>
