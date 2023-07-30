<script lang="ts">
	import NotificationToast from './NotificationToast.svelte';
	import { dismissNotification, notifications } from './notificationStore';
</script>

{#if $notifications}
	<section>
		{#each $notifications as notification (notification.id)}
			<NotificationToast on:dismiss={() => dismissNotification(notification.id)}
				>{notification.message}</NotificationToast
			>
		{/each}
	</section>
{/if}

<style lang="postcss">
	section {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		display: flex;
		margin-left: 1rem;
		margin-top: 1rem;
		justify-content: center;
		flex-direction: column;
		z-index: 1000;
	}
</style>
