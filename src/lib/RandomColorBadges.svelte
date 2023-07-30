<script lang="ts">
	import RandomColorBadge from './RandomColorBadge.svelte';

	export let tags: string[];
	export let classe: string = '';
</script>

<div class={'flex gap-2' + ' ' + classe}>
	{#each tags as tag}
		<RandomColorBadge key={tag}>{tag}</RandomColorBadge>
	{/each}
</div>
