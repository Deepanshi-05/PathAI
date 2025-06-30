import { SignedIn, SignInButton, SignUpButton, SignedOut, UserButton } from '@clerk/nextjs';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 h-16">

        {/* Left: Logo (flush left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PathAI Logo"
            width={180}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Right: Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Industry Insights (signed in) */}
          <SignedIn>
            <Link href="/dashboard">
              <Button className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5" />
                <span className="hidden sm:inline">Industry Insights</span>
              </Button>
            </Link>
          </SignedIn>

          {/* Dropdown */}
          <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm border rounded-md">
            Growth Tools
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem >
             <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2"
                  >
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
              <DropdownMenuItem>
              <Link href={'/interview'} className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Interview Prep</span>
                </Link>
              </DropdownMenuItem>
            
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
  

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
