import { Context, HttpRequest } from "@azure/functions";
import context from "../test/defaultContext";
import httpTrigger from "./index";


describe('User test', () => {

	it('should not allow if there is no body', async () => {
		let ctx = {...context} as Context;

		const request: Partial<HttpRequest> = {}

		await httpTrigger(ctx, request);

		expect(ctx.res.body.allow).toBe(false);
		expect((ctx.log as any).mock.calls[0][0]).toBe('HTTP trigger function processed a request.');
	});
	
	it('should not allow if user has no age property', async () => {
		let ctx = {...context} as Context;

		const request: Partial<HttpRequest> = {
			body: { user: {} }
		}

		await httpTrigger(ctx, request);

		expect(ctx.res.body.allow).toBe(false);
	});

	it('should not allow if user is under 18', async () => {
		let ctx = {...context} as Context;

		const request: Partial<HttpRequest> = {
			body: { user: { age: 15 } }
		}

		await httpTrigger(ctx, request);

		expect(ctx.res.body.allow).toBe(false);
	});

	it('should allow if user has 18', async () => {
		let ctx = {...context} as Context;

		const request: Partial<HttpRequest> = {
			body: { user: { age: 18 } }
		}

		await httpTrigger(ctx, request);

		expect(ctx.res.body.allow).toBe(true);
	});

	it('should allow if user is above 18', async () => {
		let ctx = {...context} as Context;

		const request: Partial<HttpRequest> = {
			body: { user: { age: 25 } }
		}

		await httpTrigger(ctx, request);

		expect(ctx.res.body.allow).toBe(true);
	});

});