<script>
	import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import LogoutButton from './LogoutButton.svelte';

	let navClass = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
	let navDivClass = 'flex flex-wrap gap-6 items-center mx-auto max-w-screen-lg';
</script>

<div>
	<div
		class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-0"
	>
		<header>
			<Navbar let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
				<NavBrand href="/">
					<img
						src="https://raw.githubusercontent.com/valentinschabschneider/trusty-rex/main/docs/logo.svg"
						class="mr-3 h-6 sm:h-9"
						alt="Trusty Rex Logo"
					/>
					<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Trusty Rex Station
					</span>
				</NavBrand>
				<div class="flex items-center lg:order-2 ml-auto">
					<LogoutButton>Log out</LogoutButton>
					<NavHamburger
						on:click={toggle}
						btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					/>
				</div>
				<NavUl
					{hidden}
					divClass="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
					ulClass="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
				>
					<NavLi href="/" active={true}>Home</NavLi>
					<NavLi href="https://github.com/valentinschabschneider/trusty-rex-station" target="_blank"
						>About</NavLi
					>
				</NavUl>
			</Navbar>
		</header>
	</div>
</div>
