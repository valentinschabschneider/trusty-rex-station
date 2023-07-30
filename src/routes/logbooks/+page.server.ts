import { apiClient } from '$lib/server/useApiClient';

export async function load() {
	return { logbooks: await apiClient.trustyRexApi.getLogbooksLogbooksGet() };
}
