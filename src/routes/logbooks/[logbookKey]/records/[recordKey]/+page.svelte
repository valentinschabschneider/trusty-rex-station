<script lang="ts">
	import JsonBlock from '$lib/JsonBlock.svelte';
	import RandomColorBadges from '$lib/RandomColorBadges.svelte';
	import dayjs from 'dayjs';
	import LocalizedFormat from 'dayjs/plugin/localizedFormat';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import { Breadcrumb, BreadcrumbItem, Label, Modal, Tooltip } from 'flowbite-svelte';
	import { copy } from 'svelte-copy';
	import type { PageData } from './$types';

	import type { RecordStateDiffWithSummary } from '$lib/RecordStateDiffWithSummary';
	import { addNotification } from '$lib/notificationStore';
	import { Timeline, TimelineItem } from 'flowbite-svelte';

	dayjs.extend(LocalizedFormat);
	dayjs.extend(relativeTime);

	let defaultModal = false;
	let selectedState: RecordStateDiffWithSummary | null = null;

	function openStateModal(state: RecordStateDiffWithSummary) {
		selectedState = state;
		defaultModal = true;
	}

	export let data: PageData;
</script>

<Breadcrumb navClass="mb-4">
	<BreadcrumbItem href="/logbooks">Logbooks</BreadcrumbItem>
	<BreadcrumbItem href="/logbooks/{data.logbookKey}">Logbook ({data.logbookKey})</BreadcrumbItem>
	<BreadcrumbItem>Record ({data.recordKey})</BreadcrumbItem>
</Breadcrumb>

<h1>States</h1>

<Timeline class="ml-2">
	{#each data.states as state}
		<div
			class="hover:bg-slate-50 hover:cursor-pointer pb-2 pr-2 mb-2"
			on:click={() => openStateModal(state)}
			on:keydown={() => openStateModal(state)}
			tabindex="0"
			role="button"
		>
			<TimelineItem
				title={state.summary.charAt(0).toUpperCase() + state.summary.slice(1)}
				date={dayjs().to(dayjs(state.created)) + ' @ ' + dayjs(state.created).format('lll')}
				classLi="mb-0"
			>
				<div class="flex justify-between">
					<div class="text-base font-normal text-gray-500 dark:text-gray-400">
						<p>test</p>
					</div>
					<div class="max-h-[60px]">
						<RandomColorBadges
							tags={state.tags}
							classe="flex-col content-start flex-wrap-reverse w-full h-full [&>*:last-child]:ml-auto"
						/>
					</div>
				</div>
			</TimelineItem>
		</div>
	{/each}
</Timeline>

<Modal
	title="State ({selectedState?.id})"
	bind:open={defaultModal}
	outsideclose
	style="position: relative"
>
	<RandomColorBadges tags={selectedState?.tags} />

	<div class="flex space-x-4">
		<div class="flex-auto">
			<Label class="block mb-2">Created</Label>
			<p>{dayjs(selectedState?.created).format('lll')}</p>
		</div>

		<div class="flex-auto">
			<Label class="block mb-2">Last updated</Label>
			<p>
				{selectedState?.lastUpdated != selectedState?.created
					? dayjs(selectedState?.lastUpdated).format('lll')
					: '-'}
			</p>
		</div>
	</div>

	<div>
		<Label class="block mb-2">Data</Label>
		<JsonBlock json={selectedState?.data} />
	</div>

	{#if selectedState?.meta != null}
		<div>
			<Label class="block mb-2">Metadata</Label>
			<JsonBlock json={selectedState?.meta} />
		</div>
	{/if}

	<div>
		<Label class="block mb-2">Differences to previous state</Label>
		<JsonBlock json={selectedState?.diffToPrevious} />
	</div>

	<slot name="header">
		<button
			use:copy={selectedState?.id}
			on:svelte-copy={() => addNotification('Copied ID to clipboard')}
			style="position: absolute; top: 0; left: 0; height: 69px; width: calc(100% - 60px);"
			class="order-last !my-0"
		/>
		<Tooltip>Copy ID</Tooltip>
	</slot>
</Modal>
