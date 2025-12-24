<script lang="ts">
	import { siteConfig, programAreas } from '$lib/data/content';
	import { onMount } from 'svelte';

	const baseImages = [
		'/images/events/GRINDConferenceCloseupParticipants.webp',
		'/images/events/GRINDConferenceCloseupSpeakers.webp',
		'/images/events/GRINDConferenceWiderPhotoParticipants.webp',
		'/images/events/GRINDConference_EveryonePictureAtTheEndOfEvent.webp',
		'/images/events/STEAMSummerCamp_ActivityKids.webp',
		'/images/events/STEAMSummerCamp_GroupPhotoTeachers.webp'
	];

	// Duplicate images for seamless looping
	const carouselImages = [...baseImages, ...baseImages];

	let currentIndex = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % baseImages.length;
		}, 4000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Programs | {siteConfig.name}</title>
	<meta name="description" content="The GRIND Collective designs and supports programs that connect youth to hands-on learning, mentorship, research, and creative production." />
	<meta property="og:title" content="Programs | {siteConfig.name}" />
	<meta property="og:description" content="Explore our programs connecting youth to learning and opportunity." />
</svelte:head>

<!-- Page Header -->
<section class="bg-off-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-urban-charcoal">
				What We Do
			</h1>
			<p class="mt-6 text-xl text-urban-charcoal/70">
				The GRIND Collective designs and supports programs that connect youth to hands-on learning, mentorship, research, and creative production.
			</p>
		</div>
	</div>
</section>

<!-- Programs in Action -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl sm:text-4xl font-bold text-urban-charcoal mb-8">Programs in Action</h2>
		<div class="overflow-hidden">
			<div
				class="flex transition-transform duration-500 ease-in-out gap-6"
				style="transform: translateX(calc(-{currentIndex} * (100% / 3 + 0.5rem)))"
			>
				{#each carouselImages as image}
					<div class="flex-shrink-0 w-[calc(100%/3-1rem)] rounded-2xl overflow-hidden">
						<img
							src={image}
							alt="GRIND program"
							class="w-full h-64 object-cover"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Program Areas -->
<section class="bg-white py-16 lg:py-24 border-t border-dust-sand/20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl font-bold text-urban-charcoal mb-8">Program Areas Include:</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
			{#each programAreas as program}
				<div class="bg-off-white rounded-xl p-6 flex items-center gap-4">
					<span class="flex-shrink-0 w-10 h-10 bg-grit-orange rounded-full flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</span>
					<span class="text-lg text-urban-charcoal font-medium">{program}</span>
				</div>
			{/each}
		</div>
		<p class="text-lg text-urban-charcoal/70 max-w-3xl">
			Programs are piloted in partnership with schools, universities, and community organizations and are designed to be measurable, scalable, and responsive to community needs.
		</p>
	</div>
</section>

<!-- CTA -->
<section class="bg-grit-orange py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
				Want to Partner on a Program?
			</h2>
			<p class="text-lg text-white/90 mb-8">
				Let's discuss how GRIND Collective can support your mission.
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
