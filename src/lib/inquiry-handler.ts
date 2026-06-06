import { business } from "@/data/site";

export interface InquiryData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export type InquiryMethod = "whatsapp" | "email_resend" | "api";

/**
 * Configuration for the active inquiry submission method.
 * Switch this method to "email_resend" or "api" in the future when you decide to upgrade.
 */
export const CURRENT_INQUIRY_METHOD: InquiryMethod = "whatsapp";

export interface InquiryResponse {
  success: boolean;
  redirectUrl?: string;
  message?: string;
}

/**
 * Main handler to process inquiry form submissions.
 * Handled client-side, returning direct actions like redirects or success/error states.
 */
export async function submitInquiry(data: InquiryData): Promise<InquiryResponse> {
  // Client-side execution check
  if (typeof window === "undefined") {
    return { success: false, message: "Window is not defined" };
  }

  try {
    switch (CURRENT_INQUIRY_METHOD) {
      case "whatsapp": {
        // Strip out non-digit characters from the business phone number
        // e.g., "+91 88897 77600" -> "918889777600"
        const cleanPhone = business.phoneInternational.replace(/[^0-9]/g, "");

        // Build a beautifully structured text template for the WhatsApp message
        const textTemplate = [
          `*New Salon Enquiry*`,
          ``,
          `*Name:* ${data.name.trim()}`,
          `*Phone:* ${data.phone.trim()}`,
          `*Email:* ${data.email?.trim() || "Not provided"}`,
          ``,
          `*Enquiry Details:*`,
          `"${data.message.trim()}"`,
          ``,
          `Sent from ${business.name} website.`,
        ].join("\n");

        const encodedMessage = encodeURIComponent(textTemplate);
        
        // Dynamic Universal WhatsApp link that works on both Mobile App & Desktop/Web
        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

        return {
          success: true,
          redirectUrl: whatsappUrl,
        };
      }

      case "email_resend": {
        // Future upgrade pattern:
        // const response = await fetch('/api/inquiry/send-email', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data),
        // });
        // if (!response.ok) throw new Error("Failed to send email enquiry");
        return {
          success: true,
          message: "Enquiry submitted successfully! We will contact you soon.",
        };
      }

      case "api": {
        // Future database/CRM integration pattern
        return {
          success: true,
          message: "Enquiry logged successfully.",
        };
      }

      default:
        return { success: false, message: "Unsupported inquiry method configured" };
    }
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
    };
  }
}
