import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { notifyOwner } from "../_core/notification";

export const contactRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        message: z.string().min(10, "Message must be at least 10 characters"),
        projectType: z.string().optional(),
        budgetRange: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // Format the contact message for notification
        const emailContent = `
New Contact Form Submission from Lunacy Media Website

Name: ${input.name}
Email: ${input.email}
Project Type: ${input.projectType || "Not specified"}
Budget Range: ${input.budgetRange || "Not specified"}

Message:
${input.message}

---
Reply to: ${input.email}
        `.trim();

        // Send notification to owner
        const notificationSuccess = await notifyOwner({
          title: `New Contact: ${input.name}`,
          content: emailContent,
        });

        if (!notificationSuccess) {
          console.warn("[Contact] Failed to send notification to owner");
          // Still return success to user even if notification fails
          // (they can still see the form success message)
        }

        return {
          success: true,
          message: "Your message has been sent successfully",
        };
      } catch (error) {
        console.error("[Contact] Error submitting form:", error);
        throw error;
      }
    }),
});
