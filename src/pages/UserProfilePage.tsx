import { useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

export default function UserProfilePage() {
  const { updateUser, isLoading } = useUpdateUser();

  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
}
