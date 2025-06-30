// app/sign-in/page.jsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 pb-20">
  <SignIn
    appearance={{
      elements: {
        card: "w-[320px] sm:w-[400px] shadow-lg rounded-xl border border-muted",
      },
    }}
  />
  </div>

  );
}
