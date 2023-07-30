<script lang="ts">
	import { JsonView } from '@zerodevx/svelte-json-view';
	export let json: any;
</script>

<div class="bg-gray-50 font-monospace text-sm p-4"><JsonView {json} /></div>
