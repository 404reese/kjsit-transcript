"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b bg-background">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold">KJSIT Transcript Portal</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 ml-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            href="/form"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/form" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Apply
          </Link>
        </div>
        <div className="hidden md:flex ml-auto items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="ml-auto md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden z-50">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/" ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Home
              </Link>
              <Link
                href="/form"
                onClick={toggleMenu}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/form" ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Apply
              </Link>
              <Link href="/login" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full">Login</Button>
              </Link>
              <Link href="/signup" onClick={toggleMenu}>
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}