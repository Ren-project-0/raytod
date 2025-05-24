"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter." }),
  contactInfo: z.string().min(5, { message: "Info kontak (Email/WA) terlalu pendek." }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter." }),
});

type FormData = z.infer<typeof formSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? "Mengirim..." : "Kirim Pesan"}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: null, errors: null, success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactInfo: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Sukses!",
          description: state.message,
        });
        form.reset(); // Reset form on successful submission
      } else if (state.errors) {
         toast({
          title: "Error Validasi",
          description: state.message || "Mohon periksa kembali input Anda.",
          variant: "destructive",
        });
      } else {
         toast({
          title: "Informasi",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Formulir Pemesanan & Pertanyaan</CardTitle>
        <CardDescription>Isi formulir di bawah ini untuk memesan atau bertanya lebih lanjut.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">Nama Lengkap</Label>
            <Input
              id="name"
              name="name"
              {...form.register("name")}
              className="mt-1"
              aria-invalid={state.errors?.name ? "true" : "false"}
            />
            {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
          </div>

          <div>
            <Label htmlFor="contactInfo" className="text-sm font-medium">Email / No. WhatsApp</Label>
            <Input
              id="contactInfo"
              name="contactInfo"
              {...form.register("contactInfo")}
              className="mt-1"
              aria-invalid={state.errors?.contactInfo ? "true" : "false"}
            />
            {state.errors?.contactInfo && <p className="text-sm text-destructive mt-1">{state.errors.contactInfo[0]}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">Pesan / Detail Pesanan</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              {...form.register("message")}
              className="mt-1"
              aria-invalid={state.errors?.message ? "true" : "false"}
            />
            {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
          </div>
          
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
