import type { ConfigurationParameters } from '@valentin.schabschneider/trusty-rex-typescript-fetch-client';

import {
	Configuration,
	DefaultApi
} from '@valentin.schabschneider/trusty-rex-typescript-fetch-client';

import { env } from '$env/dynamic/private';

const configParams: ConfigurationParameters = {
	basePath: env.API_BASE_PATH,
	apiKey: env.API_KEY
};

const apiConfig = new Configuration(configParams);

export const apiClient = {
	trustyRexApi: new DefaultApi(apiConfig)
};
