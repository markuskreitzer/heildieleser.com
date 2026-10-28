import { defineEnvVars } from '@sveltejs/kit/env';

// Optional at startup. The contact route answers 503 until these are set,
// so a build or preview without Resend secrets still succeeds.
export const variables = defineEnvVars({
  CONTACT_TO_EMAIL: {
    schema: (value) => value
  },
  CONTACT_FROM_EMAIL: {
    schema: (value) => value
  },
  RESEND_API_KEY: {
    schema: (value) => value
  }
});
