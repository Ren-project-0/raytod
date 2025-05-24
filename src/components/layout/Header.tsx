
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Palette, X, LogIn, LogOut, UserCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Galeri" },
  { href: "/commission-info", label: "Info Komisi" },
  { href: "/catalog", label: "Produk" },
  { href: "/contact", label: "Kontak" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { user, loading, signInWithGoogle, signOutUser } = useAuth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderAuthControls = () => {
    if (loading) {
      return <Button variant="ghost" size="icon" disabled><Loader2 className="h-5 w-5 animate-spin" /></Button>;
    }
    if (user) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                <AvatarFallback>{user.displayName ? user.displayName.charAt(0).toUpperCase() : <UserCircle size={20}/>}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.displayName || "Pengguna"}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Add admin links here if user is admin */}
            {/* <DropdownMenuItem asChild><Link href="/admin/dashboard">Dashboard Admin</Link></DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem onClick={signOutUser} className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <Button variant="outline" onClick={signInWithGoogle}>
        <LogIn className="mr-2 h-4 w-4" /> Login dengan Google
      </Button>
    );
  };

  if (!isMounted) {
    return (
      <header className="bg-background shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors">
            <Palette className="h-7 w-7 text-accent" />
            Ren Project Studio
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" disabled><Loader2 className="h-5 w-5 animate-spin" /></Button>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" disabled>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors">
          <Palette className="h-7 w-7 text-accent" />
          Ren Project Studio
        </Link>

        {/* Desktop Navigation & Auth */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <nav className="flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium",
                  pathname === link.href ? "text-accent font-semibold bg-accent/10" : "hover:bg-accent/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {renderAuthControls()}
        </div>

        {/* Mobile Navigation Trigger & Auth */}
        <div className="md:hidden flex items-center gap-2">
          {renderAuthControls()}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu navigasi</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0 bg-background">
              <SheetHeader className="flex flex-row justify-between items-center p-4 border-b">
                 <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <Palette className="h-6 w-6 text-accent" />
                    Ren Project Studio
                  </Link>
                <SheetTitle className="sr-only">Menu Navigasi Utama</SheetTitle> {/* Corrected */}
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Tutup menu</span>
                    </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col space-y-2 p-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-foreground hover:text-accent hover:bg-accent/10 transition-colors block px-3 py-2 rounded-md text-base font-medium",
                        pathname === link.href ? "text-accent bg-accent/10 font-semibold" : ""
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
