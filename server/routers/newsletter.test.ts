import { describe, expect, it, vi } from "vitest";
import { newsletterRouter } from "./newsletter";
import type { TrpcContext } from "../_core/context";

// Mock fetch
global.fetch = vi.fn();

describe("newsletter.subscribe", () => {
  it("successfully subscribes an email to Mailchimp", async () => {
    const mockContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };

    const mockMailchimpResponse = {
      id: "test-member-id",
      email_address: "test@example.com",
      status: "pending",
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockMailchimpResponse,
    } as Response);

    const caller = newsletterRouter.createCaller(mockContext);
    const result = await caller.subscribe({ email: "test@example.com", firstName: "John" });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Successfully subscribed");
    expect(result.alreadySubscribed).toBe(false);
    expect(global.fetch).toHaveBeenCalled();
  });

  it("handles already subscribed email gracefully", async () => {
    const mockContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };

    const mockErrorResponse = {
      type: "https://mailchimp.com/marketing/api/error-types/MemberExists",
      title: "Member Exists",
      status: 400,
      detail: "test@example.com is already a list member. Use PUT to update existing members.",
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => mockErrorResponse,
    } as Response);

    const caller = newsletterRouter.createCaller(mockContext);
    const result = await caller.subscribe({ email: "test@example.com", firstName: "Jane" });

    expect(result.success).toBe(true);
    expect(result.alreadySubscribed).toBe(true);
  });

  it("rejects invalid email addresses", async () => {
    const mockContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };

    const caller = newsletterRouter.createCaller(mockContext);

    try {
      await caller.subscribe({ email: "invalid-email", firstName: "Test" });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid");
    }
  });

  it("handles subscription without firstName", async () => {
    const mockContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };

    const mockMailchimpResponse = {
      id: "test-member-id-2",
      email_address: "test2@example.com",
      status: "pending",
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockMailchimpResponse,
    } as Response);

    const caller = newsletterRouter.createCaller(mockContext);
    const result = await caller.subscribe({ email: "test2@example.com" });

    expect(result.success).toBe(true);
    expect(result.alreadySubscribed).toBe(false);
  });
});
