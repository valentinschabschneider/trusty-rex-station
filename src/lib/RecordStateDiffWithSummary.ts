import type { RecordStateDiff } from 'trusty-rex-typescript-fetch-client';

export interface RecordStateDiffWithSummary extends RecordStateDiff {
	summary: 'added' | 'altered';
}
