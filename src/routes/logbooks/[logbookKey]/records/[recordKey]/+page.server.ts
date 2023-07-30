import type { RecordStateDiffWithSummary } from '$lib/RecordStateDiffWithSummary';
import { apiClient } from '$lib/server/useApiClient';
import type { RecordStateDiff } from 'trusty-rex-typescript-fetch-client';

export async function load({ params }) {
	return {
		logbookKey: params.logbookKey,
		recordKey: params.recordKey,
		states: (
			(await apiClient.trustyRexApi.getRecordStatesLogbooksLogbookKeyRecordsRecordKeyStatesGet({
				logbookKey: params.logbookKey,
				recordKey: params.recordKey
			})) as RecordStateDiff[]
		).map(
			(state, index) =>
				({ ...state, summary: index === 0 ? 'added' : 'modified' } as RecordStateDiffWithSummary)
		)
	};
}
