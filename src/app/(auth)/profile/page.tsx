import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div className="my-5 static fullh flex justify-center">
        <UserProfile></UserProfile>
    </div>
  );
}
