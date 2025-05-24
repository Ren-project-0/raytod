"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  contactInfo: z.string().min(5, { message: "Info kontak (Email/WA) terlalu pendek." }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter." }),
});

export interface ContactFormState {
  message: string | null;
  errors?: {
    name?: string[];
    contactInfo?: string[];
    message?: string[];
  } | null;
  success?: boolean;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    contactInfo: formData.get("contactInfo"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validasi gagal. Mohon periksa kembali input Anda.",
      success: false,
    };
  }

  // In a real application, you would process the data here:
  // e.g., send an email, save to a database, etc.
  console.log("Form data received:");
  console.log("Name:", validatedFields.data.name);
  console.log("Contact Info:", validatedFields.data.contactInfo);
  console.log("Message:", validatedFields.data.message);

  // Simulate a delay for demonstration
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.",
    errors: null,
    success: true,
  };
}
