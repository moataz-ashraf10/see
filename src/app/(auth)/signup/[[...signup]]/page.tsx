import { SignUp } from "@clerk/nextjs";

export default function signup() {
  return (
    <div className="fullh mx-auto text-center flex items-center justify-center">
      <SignUp></SignUp>
    </div>
  );
}
