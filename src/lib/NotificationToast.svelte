<script>
	import { Toast } from 'flowbite-svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	let show = true;
	let counter = 6;

	onMount(async () => {
		timeout();
	});

	function timeout() {
		if (--counter > 0) return setTimeout(timeout, 1000);
		show = false;

		setTimeout(() => dispatch('dismiss'), 1000);
	}
</script>

<Toast simple transition={slide} bind:open={show}>
	<svg
		slot="icon"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/></svg
	>
	<slot />
</Toast>
