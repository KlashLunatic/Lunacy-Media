import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { ENV } from "../_core/env";

/**
 * Mailchimp Newsletter Router
 * Handles email subscription to Mailchimp audience
 */

export const newsletterRouter = router({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().email(), firstName: z.string().optional() }))
    .mutation(async ({ input }) => {
      const { email, firstName } = input;
      const apiKey = ENV.mailchimpApiKey;
      const audienceId = ENV.mailchimpAudienceId;

      if (!apiKey || !audienceId) {
        throw new Error("Mailchimp credentials not configured");
      }

      // Extract server prefix from API key (format: key-us19)
      const serverPrefix = apiKey.split("-").pop();
      if (!serverPrefix) {
        throw new Error("Invalid Mailchimp API key format");
      }

      const mailchimpUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

      try {
        const response = await fetch(mailchimpUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
          },
          body: JSON.stringify({
            email_address: email,
            status: "pending", // Use "pending" for double opt-in, "subscribed" for immediate
            tags: ["lunacy-orbit"],
            merge_fields: firstName ? { FNAME: firstName } : {},
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("[Mailchimp Error]", errorData);

          // Handle common errors
          if (response.status === 400 && errorData.title === "Member Exists") {
            return {
              success: true,
              message: "Email already subscribed",
              alreadySubscribed: true,
            };
          }

          throw new Error(errorData.detail || "Failed to subscribe to Mailchimp");
        }

        const data = await response.json();
        return {
          success: true,
          message: "Successfully subscribed to the Orbit",
          memberId: data.id,
          alreadySubscribed: false,
        };
      } catch (error) {
        console.error("[Newsletter Subscribe Error]", error);
        throw error;
      }
    }),
});
