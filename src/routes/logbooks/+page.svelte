<script lang="ts">
	import {
		Breadcrumb,
		BreadcrumbItem,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Breadcrumb navClass="mb-4">
	<BreadcrumbItem>Logbooks</BreadcrumbItem>
</Breadcrumb>

<h1>Logbooks</h1>

<Table>
	<TableHead>
		<TableHeadCell>Key</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		{#each data.logbooks as logbook}
			<TableBodyRow>
				<TableBodyCell>
					<a href="/logbooks/{logbook.key}">{logbook.key}</a></TableBodyCell
				>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
