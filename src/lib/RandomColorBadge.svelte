<script lang="ts">
	import { Badge } from 'flowbite-svelte';

	import { onMount } from 'svelte';
	import type { Color } from './badgeStore';
	import { addBadge, badges } from './badgeStore';

	onMount(async () => {
		if (!$badges.map((b) => b.key).includes(key)) {
			addBadge(key);
		}

		badgeColor = $badges.filter((b) => b.key === key)[0].color;
	});

	$: badgeColor = 'none' as Color;

	export let key: string;
</script>

<Badge large color={badgeColor} class="w-max">
	<slot />
</Badge>
