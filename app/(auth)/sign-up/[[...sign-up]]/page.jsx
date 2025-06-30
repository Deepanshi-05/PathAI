import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen pb-10">
      <SignUp
        appearance={{
          elements: {
            card: 'w-[320px] sm:w-[400px]', // Adjust width as needed
          },
        }}
      />
    </div>
  );
}
