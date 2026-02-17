import { describe, it, expect } from 'vitest';
import { appRouter } from '../routers';
import type { Context } from '../_core/context';

// Create a mock context for testing
const createMockContext = (): Context => ({
  user: null,
  req: {} as any,
  res: {} as any,
});

describe('Moon Router', () => {
  it('should fetch NASA moon texture successfully', async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.moon.getTexture();

    expect(result).toBeDefined();
    expect(result.dataUrl).toBeDefined();
    expect(result.dataUrl).toMatch(/^data:image\/jpeg;base64,/);
    expect(result.source).toBe('NASA Scientific Visualization Studio');
    expect(result.attribution).toBe('NASA/GSFC/Arizona State University');
  });

  it('should return a valid base64 data URL', async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.moon.getTexture();

    // Check that the base64 string is not empty
    const base64Data = result.dataUrl.split(',')[1];
    expect(base64Data).toBeDefined();
    expect(base64Data.length).toBeGreaterThan(1000); // Should be a substantial image

    // Verify it's valid base64
    expect(() => Buffer.from(base64Data, 'base64')).not.toThrow();
  });
});
