<script>
	import Navbar from '$lib/Navbar.svelte';
	import Notifications from '$lib/Notifications.svelte';
	import '../app.css';
</script>

<Navbar />

<div class="w-full flex flex-col items-center py-5 lg:px-0 px-8">
	<div class="max-w-screen-lg w-full">
		<slot />
	</div>
</div>

<Notifications />
