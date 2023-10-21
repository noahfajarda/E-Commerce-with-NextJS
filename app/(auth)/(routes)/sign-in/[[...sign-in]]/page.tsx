import { SignIn } from "@clerk/nextjs";

// allows to SIGN-IN WITH GOOGLE

export default function Page() {
  // built-in sign-in component powered by 'clerk'
  return <SignIn />;
}
