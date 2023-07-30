import { apiClient } from '$lib/server/useApiClient';

export async function load({ params }) {
	return {
		logbookKey: params.logbookKey,
		records: await apiClient.trustyRexApi.getRecordsLogbooksLogbookKeyRecordsGet({
			logbookKey: params.logbookKey
		})
	};
}
