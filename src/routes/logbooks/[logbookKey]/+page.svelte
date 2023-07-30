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
	<BreadcrumbItem href="/logbooks">Logbooks</BreadcrumbItem>
	<BreadcrumbItem>Logbook ({data.logbookKey})</BreadcrumbItem>
</Breadcrumb>

<h1>Records</h1>

<Table>
	<TableHead>
		<TableHeadCell>Key</TableHeadCell>
		<TableHeadCell>Amount of states</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		{#each data.records as record}
			<TableBodyRow>
				<TableBodyCell>
					<a href="/logbooks/{data.logbookKey}/records/{record.key}">{record.key}</a></TableBodyCell
				>
				<TableBodyCell>{record.amountOfStates}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
