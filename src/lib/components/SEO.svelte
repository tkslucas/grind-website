<script lang="ts">
	interface Props {
		title: string;
		description: string;
		canonical?: string;
		ogImage?: string;
		ogType?: 'website' | 'article';
	}

	const { title, description, canonical, ogImage, ogType = 'website' }: Props = $props();

	const siteUrl = 'https://grindcollective.org';
	const siteName = 'THE GRIND COLLECTIVE';
	const defaultImage = '/images/GRIND Collective Main Logo.png';

	const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
	const fullOgImage = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}${defaultImage}`;

	// Organization structured data
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'NonprofitOrganization',
		name: 'THE GRIND COLLECTIVE',
		alternateName: 'GRIND Collective',
		description:
			'Chicago-based 501(c)(3) creating equitable pathways for Black and Brown youth through science, technology, creativity, and social impact.',
		url: siteUrl,
		logo: `${siteUrl}/images/GRIND Collective Main Logo.png`,
		foundingDate: '2024',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Chicago',
			addressRegion: 'IL',
			addressCountry: 'US'
		},
		areaServed: {
			'@type': 'City',
			name: 'Chicago'
		},
		nonprofitStatus: '501(c)(3)'
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	{#if fullCanonical}
		<link rel="canonical" href={fullCanonical} />
	{/if}

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content={fullOgImage} />
	{#if fullCanonical}
		<meta property="og:url" content={fullCanonical} />
	{/if}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullOgImage} />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
</svelte:head>
