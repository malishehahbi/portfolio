<script lang="ts">
	import Logo from '$lib/assets/logo.svg.svelte';
	import '../app.css';

	let { data } = $props();

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	let mobileMenuOpen = $state(false);
	let activeSection = $state('');

	const skills = [
		{
			title: 'Web Dev',
			items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'WebGL / Three.js']
		},
		{
			title: 'Backend',
			items: ['Node.js / Go', 'PostgreSQL', 'Redis / Kafka', 'Python / FastAPI']
		},
		{
			title: 'Tools',
			items: ['Docker / K8s', 'Git / CI/CD', 'Figma Arch', 'Terraform']
		},
		{
			title: 'Interests',
			items: ['Neural Networks', 'Fintech Pipes', 'SaaS Architecture', 'UX Engineering']
		}
	];

	const projects = [
		{
			id: 'PROJECT_01',
			title: 'Synthetix Engine',
			description: 'A real-time AI processing pipeline for high-frequency financial data analysis.',
			tags: ['Rust', 'WASM']
		},
		{
			id: 'PROJECT_02',
			title: 'Monolith OS',
			description: 'A browser-based operating system built for ultra-minimalist focus workflows.',
			tags: ['Next.js', 'Zustand']
		},
		{
			id: 'PROJECT_03',
			title: 'Krypton UI',
			description: 'Component system for data-heavy fintech dashboards emphasizing clarity.',
			tags: ['Storybook', 'Tailwind']
		},
		{
			id: 'PROJECT_04',
			title: 'Neural Graph',
			description: 'Visualizing complex AI decision trees in 3D space using WebGL.',
			tags: ['Three.js', 'Python']
		}
	];

	const experience = [
		{
			role: 'Architectural Lead',
			company: 'Freelance / Remote',
			period: '2023 — PRESENT',
			description: 'Building custom SaaS foundations for early-stage fintech startups. Focus on scalability and DX.'
		},
		{
			role: 'Full Stack Engineer',
			company: 'Tech Monolith Inc.',
			period: '2022 — 2023',
			description: 'Maintained core infrastructure for high-traffic e-commerce platforms using modern stacks.'
		},
		{
			role: 'Computer Engineering',
			company: 'University Technical Institute',
			period: '2021 — PRESENT',
			description: 'Pursuing degree with focus on Distributed Systems and Software Architecture.'
		}
	];

	const navItems = [
		{ id: 'skills', label: 'Skills' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'vision', label: 'Vision' }
	];

	const homeHref = $derived(`/?locale=${data.locale}`);

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Form submitted:', formData);
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function getNavClass(id: string): string {
		const base = 'font-headline font-bold tracking-tighter uppercase text-sm transition-all duration-300 pb-1';
		if (activeSection === id) {
			return `${base} text-primary border-b-2 border-primary`;
		}
		return `${base} text-on-surface-variant hover:text-primary`;
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<svelte:window 
	onscroll={() => {
		const sections = ['projects', 'skills', 'experience', 'vision'];
		const scrollPos = window.scrollY + 200;
		let current = '';
		
		for (const id of sections) {
			const el = document.getElementById(id);
			if (el) {
				const top = el.offsetTop;
				const height = el.offsetHeight;
				if (scrollPos >= top && scrollPos < top + height) {
					current = id;
					break;
				}
			}
		}
		activeSection = current;
	}}
/>

<!-- Top Navigation -->
<nav class="sticky top-0 w-full z-50 bg-[#0e0e0e]/95 backdrop-blur-sm border-b border-[#484848]/20">
	<div class="flex justify-between items-center px-4 md:px-12 py-4 md:py-6">
		<a href={homeHref} class="text-lg md:text-xl font-headline font-bold tracking-tighter text-primary uppercase">
			<Logo/>
		</a>
		
		<!-- Desktop Navigation -->
		<div class="hidden md:flex gap-12">
			{#each navItems as item}
				<a class={getNavClass(item.id)} href="#{item.id}">{item.label}</a>
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<button 
			class="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary"
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
		>
			<span class="material-symbols-outlined text-2xl">
				{mobileMenuOpen ? 'close' : 'menu'}
			</span>
		</button>

		<!-- Desktop Contact Button -->
		<button class="hidden md:block font-headline font-bold tracking-tighter uppercase text-sm text-primary hover:bg-surface-container-high px-4 py-2 min-h-[44px] transition-all active:scale-[0.99]">CONTACT</button>
	</div>

	<!-- Mobile Navigation Dropdown -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-[#484848]/20 bg-[#0e0e0e]">
			<div class="flex flex-col py-2">
				{#each navItems as item}
					<a 
						class="font-headline font-bold tracking-tighter uppercase text-sm px-4 py-3 min-h-[44px] flex items-center {getNavClass(item.id).replace('pb-1', '')}" 
						href="#{item.id}" 
						onclick={closeMobileMenu}
					>
						{item.label}
					</a>
				{/each}
				<button class="font-headline font-bold tracking-tighter uppercase text-sm text-primary px-4 py-3 min-h-[44px] text-left hover:bg-surface-container-high transition-all">CONTACT</button>
			</div>
		</div>
	{/if}
</nav>

<main>
	<!-- Hero Section -->
	<section class="px-4 md:px-12 py-16 md:py-48 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end border-b border-outline-variant/10">
		<div class="md:col-span-10">
			<div class="mb-8 md:mb-12">
				<img 
					src="/personal.png" 
					alt="Mohammad Ali - Computer Engineer"
					width="120"
					height="120"
					loading="eager"
					decoding="async"
					class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-sm border border-outline-variant/30"
				/>
			</div>
			<span class="technical-label text-on-surface-variant mb-4 md:mb-6 block">IDENTITY / 001</span>
			<h1 class="text-5xl md:text-7xl lg:text-[10rem] font-headline font-bold tracking-tighter leading-[0.85] text-on-surface uppercase mb-6 md:mb-12">M. ALI</h1>
			<div class="max-w-xl md:max-w-3xl">
				<p class="text-lg md:text-2xl lg:text-3xl font-light text-on-surface-variant leading-tight">
					3rd Year <span class="text-on-surface font-medium">Computer Engineer</span> & Independent Builder. Modern Web Experiences, AI, Fintech, SaaS.
				</p>
			</div>
		</div>
		<div class="md:col-span-2 hidden md:flex flex-col items-end">
			<span class="technical-label text-on-surface-variant text-right">SYSTEM STATE: ACTIVE</span>
			<span class="technical-label text-on-surface-variant text-right">LOC: 40.7128° N, 74.0060° W</span>
		</div>
	</section>

	<!-- About Section -->
	<section class="px-4 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 bg-surface-container-low border-b border-outline-variant/10">
		<div class="md:col-span-4">
			<span class="technical-label text-on-surface-variant">PHILOSOPHY</span>
		</div>
		<div class="md:col-span-8">
			<h2 class="text-2xl md:text-4xl font-headline font-bold tracking-tighter uppercase mb-6 md:mb-8">Architectural Intent</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
				<p class="text-on-surface-variant leading-relaxed">
					I approach code not just as a set of instructions, but as a structural discipline. Similar to brutalist architecture, my work prioritizes honesty in materials—meaning clean logic, robust data structures, and uncompromised performance. Every module is a load-bearing element in the digital ecosystem.
				</p>
				<p class="text-on-surface-variant leading-relaxed">
					The goal is to eliminate the unnecessary. By adhering to the principles of Swiss Modernism, I create interfaces where typography dictates the rhythm and whitespace provides the clarity required for complex technical tasks.
				</p>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section class="px-4 md:px-12 py-16 md:py-24 border-b border-outline-variant/10" id="skills">
		<div class="grid grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-16">
			<div class="col-span-12">
				<span class="technical-label text-on-surface-variant">CAPABILITIES / CORE</span>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/20 border border-outline-variant/20">
			{#each skills as group}
				<div class="bg-surface p-6 md:p-8">
					<h3 class="technical-label text-primary mb-4 md:mb-6">{group.title}</h3>
					<ul class="space-y-3 md:space-y-4 text-sm font-medium uppercase tracking-tight">
						{#each group.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Projects Section -->
	<section class="px-4 md:px-12 py-16 md:py-24 bg-surface-container border-b border-outline-variant/10" id="projects">
		<div class="flex justify-between items-end mb-10 md:mb-16">
			<span class="technical-label text-on-surface-variant">WORKS / INDEX</span>
			<span class="text-sm font-headline font-bold uppercase tracking-widest text-on-surface-variant">001 — 004</span>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
			{#each projects as project}
				<div class="group border-t border-outline-variant/20 pt-6 md:pt-8 pb-8 md:pb-16 flex flex-col justify-between min-h-[280px] md:h-80">
					<div>
						<div class="flex justify-between items-start mb-3 md:mb-4">
							<span class="technical-label text-primary">{project.id}</span>
							<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">north_east</span>
						</div>
						<h4 class="text-2xl md:text-3xl font-headline font-bold uppercase tracking-tighter mb-3 md:mb-4">{project.title}</h4>
						<p class="text-on-surface-variant text-sm max-w-sm">{project.description}</p>
					</div>
					<div class="flex flex-wrap gap-2 md:gap-4 mt-4">
						{#each project.tags as tag}
							<span class="text-[10px] px-2 py-1 border border-outline-variant/30 text-on-surface-variant uppercase">{tag}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Experience Section -->
	<section class="px-4 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-outline-variant/10" id="experience">
		<div class="md:col-span-4">
			<span class="technical-label text-on-surface-variant">CHRONOLOGY</span>
		</div>
		<div class="md:col-span-8">
			<div class="space-y-10 md:space-y-16">
				{#each experience as exp}
					<div class="flex flex-col md:flex-row justify-between items-start gap-3 md:gap-4">
						<div class="max-w-md flex-1">
							<h3 class="text-xl md:text-2xl font-headline font-bold uppercase tracking-tighter mb-1">{exp.role}</h3>
							<p class="text-primary font-medium uppercase text-xs md:text-sm mb-2 md:mb-4">{exp.company}</p>
							<p class="text-on-surface-variant text-sm">{exp.description}</p>
						</div>
						<span class="technical-label text-on-surface-variant mt-2 md:mt-0 shrink-0">{exp.period}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Vision Section -->
	<section class="px-4 md:px-12 py-24 md:py-48 bg-surface-container-low border-b border-outline-variant/10 text-center" id="vision">
		<span class="technical-label text-on-surface-variant mb-8 md:mb-12 block">THE VISION</span>
		<blockquote class="text-2xl md:text-4xl lg:text-6xl font-headline font-bold tracking-tighter uppercase leading-[0.9] max-w-6xl mx-auto text-on-surface">
			"Simplicity is the ultimate structural integrity. We build not just for function, but for permanence in an ephemeral digital age."
		</blockquote>
	</section>

	<!-- Contact Section -->
	<section class="px-4 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 bg-surface-container-highest" id="contact">
		<div class="md:col-span-4">
			<span class="technical-label text-on-surface-variant">TRANSMISSION</span>
			<h2 class="text-2xl md:text-4xl font-headline font-bold uppercase tracking-tighter mt-4 mb-4 md:mb-0">Initiate Connect</h2>
		</div>
		<div class="md:col-span-8">
			<form class="grid grid-cols-1 md:grid-cols-2 gap-3" onsubmit={handleSubmit}>
			<div class="col-span-12 flex flex-row gap-4 md:gap-8">
				<div class="flex-1 border-b border-outline-variant py-3 md:py-4">
					<label class="technical-label text-on-surface-variant block mb-2" for="name">SENDER_NAME</label>
					<input 
						id="name"
						class="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:uppercase text-outline p-0 text-base md:text-lg min-h-[44px]"
						placeholder="Enter Name" 
						type="text"
						bind:value={formData.name}
					/>
				</div>
				<div class="flex-1 border-b border-outline-variant py-3 md:py-4">
					<label class="technical-label text-on-surface-variant block mb-2" for="email">SENDER_EMAIL</label>
					<input 
						id="email"
						class="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:uppercase text-outline p-0 text-base md:text-lg min-h-[44px]"
						placeholder="Enter Email" 
						type="email"
						bind:value={formData.email}
					/>
				</div>
			</div>
				<div class="col-span-12 border-b border-outline-variant py-3 md:py-4">
					<label class="technical-label text-on-surface-variant block mb-2" for="message">MESSAGE_PAYLOAD</label>
					<textarea 
						id="message"
						class="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder: uppercase text-outline p-0 resize-none text-base md:text-lg" 
						placeholder="Describe the Mission" 
						rows="4"
						bind:value={formData.message}
					></textarea>
				</div>
				<div class="col-span-12 mt-4 md:mt-8">
					<button class="bg-primary text-on-primary font-headline font-bold uppercase tracking-widest px-8 md:px-12 py-4 hover:bg-primary-dim transition-colors active:scale-[0.98] w-full md:w-auto min-h-[44px]" type="submit">
						SEND_TRANSMISSION
					</button>
				</div>
			</form>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-10 md:py-16 w-full mt-auto bg-[#131313] border-t border-[#484848]/10">
	<div class="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-6 md:mb-0 text-center md:text-left">
		© 2024 BUILT BY ARCHITECTURAL MONOLITH. ALL RIGHTS RESERVED.
	</div>
	<div class="flex gap-8 md:gap-12">
		<button class="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-white transition-colors duration-200 min-h-[44px] px-2">GITHUB</button>
		<button class="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-white transition-colors duration-200 min-h-[44px] px-2">LINKEDIN</button>
		<button class="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-white transition-colors duration-200 min-h-[44px] px-2">SOURCE</button>
	</div>
</footer>
