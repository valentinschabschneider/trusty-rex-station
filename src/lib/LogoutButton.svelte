<script>
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { Button } from 'flowbite-svelte';
</script>

{#if $page.data.session}
	<Button on:click={() => signOut()} color="dark"><slot /></Button>
{/if}
