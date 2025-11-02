import { env, SELF } from 'cloudflare:test';
import { beforeAll, describe, expect, it } from 'vitest';
import '../src/index';

describe('worker', () => {
	beforeAll(async () => {
		// We don't need to do anything here because the worker is already running
	});

	it('responds with Github Wiki page', async () => {
		const response = await SELF.fetch('http://localhost/m/get-work-done/github-wiki-see/wiki');
		expect(response.status).toBe(200);
		const text = await response.text();
		expect(text).toContain('github-wiki-see');
	});
});