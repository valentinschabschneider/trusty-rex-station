import { env } from '$env/dynamic/private';
import { SvelteKitAuth } from '@auth/sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import crypto from 'crypto';

async function authorization({ event, resolve }: any) {
	if (env.DYNAMIC_AUTH_CONFIG) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth/signin');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(
	SvelteKitAuth(
		env.DYNAMIC_AUTH_CONFIG
			? eval(env.DYNAMIC_AUTH_CONFIG)
			: async () => {
					return { secret: crypto.randomBytes(20).toString('hex'), trustHost: true, providers: [] };
			  }
	),
	authorization
);
