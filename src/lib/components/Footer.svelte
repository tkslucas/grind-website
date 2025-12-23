<script lang="ts">
	import { navigation, siteConfig } from '$lib/data/content';

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-urban-charcoal text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
			<!-- Brand Column -->
			<div class="lg:col-span-2">
				<a href="/" class="inline-block">
					<img
						src="/images/GRIND Collective Alt Text Logo.png"
						alt="{siteConfig.name} Logo"
						class="h-16 w-auto"
					/>
				</a>
				<p class="mt-4 text-dust-sand/80 max-w-md">
					{siteConfig.tagline}
				</p>
				<p class="mt-2 text-sm text-dust-sand/60 italic">
					"{siteConfig.brandSpirit}"
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-dust-sand">
					Quick Links
				</h3>
				<ul class="mt-4 space-y-3">
					<li>
						<a href="/" class="text-white/80 hover:text-grit-orange transition-colors">
							Home
						</a>
					</li>
					{#each navigation as item}
						<li>
							<a href={item.href} class="text-white/80 hover:text-grit-orange transition-colors">
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider text-dust-sand">
					Contact
				</h3>
				<ul class="mt-4 space-y-3">
					<li class="text-white/80">
						{siteConfig.location}
					</li>
					<li>
						<a
							href="mailto:{siteConfig.email}"
							class="text-white/80 hover:text-grit-orange transition-colors"
						>
							{siteConfig.email}
						</a>
					</li>
					<li class="text-white/80">
						Partner With Us: {siteConfig.phone}
					</li>
					<li class="text-white/60 text-sm">
						EIN: {siteConfig.ein}
					</li>
				</ul>

				<!-- Social Links Placeholder -->
				<div class="mt-6">
					<h4 class="text-sm font-semibold uppercase tracking-wider text-dust-sand mb-3">
						Follow Us
					</h4>
					<div class="flex gap-4">
						<!-- Instagram - uncomment when URL is available
						<a
							href="#"
							class="text-white/60 hover:text-grit-orange transition-colors"
							aria-label="Instagram"
						>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
							</svg>
						</a>
						-->
						<a
							href="https://www.linkedin.com/company/the-grind-collective/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-white/60 hover:text-grit-orange transition-colors"
							aria-label="LinkedIn"
						>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Donate Button -->
		<div class="mt-8 text-center">
			<a
				href={siteConfig.donateUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center px-6 py-3 bg-grit-orange text-white font-semibold rounded-full hover:bg-electric-ochre transition-colors duration-200"
			>
				Donate
			</a>
			<p class="mt-3 text-sm text-white/60">
				The GRIND Collective is a registered 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law.
			</p>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-12 pt-8 border-t border-white/10">
			<div class="flex flex-col sm:flex-row justify-between items-center gap-4">
				<p class="text-sm text-white/60">
					&copy; {currentYear} {siteConfig.name}. All rights reserved.
				</p>
				<p class="text-sm text-white/60">
					A Chicago-based {siteConfig.type}
				</p>
			</div>
		</div>
	</div>
</footer>
