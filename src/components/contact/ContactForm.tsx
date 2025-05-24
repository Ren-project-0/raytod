
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
  contactInfo: z.string().min(5, { message: "Info kontak (Email/WA) terlalu pendek." }).email({ message: "Format email tidak valid."}).or(z.string().regex(/^(\+62|0)8[1-9][0-9]{6,9}$/, {message: "Nomor WhatsApp tidak valid."})),
  message: z.string().min(10, { message: "Pesan atau brief ilustrasi minimal 10 karakter." }),
});

type FormData = z.infer<typeof formSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? "Mengirim Pesan..." : "Kirim Pesan / Brief"}
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
          title: "Pesan Terkirim!",
          description: state.message,
          variant: "default", 
        });
        form.reset(); 
      } else if (state.errors) {
         toast({
          title: "Oops, Ada Kesalahan Validasi",
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
    <Card className="w-full shadow-lg bg-card">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Formulir Kontak & Brief Ilustrasi</CardTitle>
        <CardDescription>Isi formulir di bawah untuk memesan ilustrasi, produk, atau bertanya lebih lanjut. Untuk brief ilustrasi, sertakan detail sebanyak mungkin.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-foreground">Nama Lengkap</Label>
            <Input
              id="name"
              name="name"
              {...form.register("name")}
              className="mt-1 bg-background border-border focus:border-accent"
              aria-invalid={state.errors?.name ? "true" : "false"}
              placeholder="Nama Anda"
            />
            {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
          </div>

          <div>
            <Label htmlFor="contactInfo" className="text-sm font-medium text-foreground">Email / No. WhatsApp Aktif</Label>
            <Input
              id="contactInfo"
              name="contactInfo"
              {...form.register("contactInfo")}
              className="mt-1 bg-background border-border focus:border-accent"
              aria-invalid={state.errors?.contactInfo ? "true" : "false"}
              placeholder="Email atau No. WhatsApp Anda"
            />
            {state.errors?.contactInfo && <p className="text-sm text-destructive mt-1">{state.errors.contactInfo[0]}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-foreground">Pesan / Detail Brief Ilustrasi</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              {...form.register("message")}
              className="mt-1 bg-background border-border focus:border-accent"
              aria-invalid={state.errors?.message ? "true" : "false"}
              placeholder="Deskripsikan kebutuhan ilustrasi Anda (gaya, karakter, pose, warna, referensi jika ada) atau pertanyaan lainnya."
            />
            {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
          </div>
          
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
