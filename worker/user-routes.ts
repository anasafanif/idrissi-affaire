import { Hono } from "hono";
import type { Env } from './core-utils';
import { ContactSubmissionEntity } from "./entities";
import { ok, bad } from './core-utils';
import type { ContactFormPayload } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // CONTACT FORM
  app.post('/api/contact', async (c) => {
    try {
      const payload = await c.req.json<ContactFormPayload>();
      if (!payload.name || !payload.email || !payload.subject || !payload.message) {
        return bad(c, 'Missing required fields');
      }
      const submission = {
        ...payload,
        id: crypto.randomUUID(),
        ts: Date.now(),
      };
      await ContactSubmissionEntity.create(c.env, submission);
      console.log('New contact form submission persisted:', JSON.stringify(submission, null, 2));
      return ok(c, { message: 'Message received successfully!' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return c.json({ success: false, error: 'Failed to process submission' }, 500);
    }
  });
}