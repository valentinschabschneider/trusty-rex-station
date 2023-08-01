# Trusty Rex Station

WebUI for [Trusty Rex](https://github.com/valentinschabschneider/trusty-rex).

## Configuration

Required environment variables:

- API_BASE_PATH
- API_KEY

## Authentication

This project uses [SvelteKit Auth](https://authjs.dev/reference/sveltekit) and you can provide a `DynamicSvelteKitAuthConfig` ([docs reference](https://authjs.dev/reference/sveltekit#dynamicsveltekitauthconfig)) via the `DYNAMIC_AUTH_CONFIG` environment variable .

### Example

This configures two providers, one for credentials (username + password in this case) and one for Auth0.

```env
DYNAMIC_AUTH_CONFIG=async()=>{return{secret:'<secret>',trustHost:!0,providers:[(await import('@auth/core/providers/credentials')).default({name:'Credentials',credentials:{username:{label:'Username',type:'text'},password:{label:'Password',type:'password'}},async authorize(credentials,req){if(credentials.username==='jsmith'&&credentials.password==='password'){return{id:'1',name:'J Smith',email:'jsmith@example.com'}}else{return null}}}),{id:"auth0",name:"Auth0",wellKnown:"https://trusty-rex-station.eu.auth0.com/.well-known/openid-configuration",type:"oidc",clientId:"<clientId>",clientSecret:"<clientSecret>",issuer:"https://trusty-rex-station.eu.auth0.com"}]}}
```

Readable version:

```js
async () => {
	return {
		secret: '<secret>',
		trustHost: true,
		providers: [
			(await import('@auth/core/providers/credentials')).default({
				name: 'Credentials',
				credentials: {
					username: {
						label: 'Username',
						type: 'text'
					},
					password: {
						label: 'Password',
						type: 'password'
					}
				},
				async authorize(credentials, req) {
					if (credentials.username === 'jsmith' && credentials.password === 'password') {
						return {
							id: '1',
							name: 'J Smith',
							email: 'jsmith@example.com'
						};
					} else {
						return null;
					}
				}
			}),
			{
				id: 'auth0',
				name: 'Auth0',
				wellKnown: 'https://trusty-rex-station.eu.auth0.com/.well-known/openid-configuration',
				type: 'oidc',
				clientId: '<clientId>',
				clientSecret: '<clientSecret>',
				issuer: 'https://trusty-rex-station.eu.auth0.com'
			}
		]
	};
};
```

Here an js minifier that worked for top level asyn for your convinience: https://www.minifier.org/

## Developing

Install dependencies with `yarn install`), start a development server:

```bash
yarn run dev
```
