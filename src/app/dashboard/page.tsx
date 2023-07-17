import { getServerSession } from 'next-auth/next';
import { redirect } from "next/navigation";
import * as data from '../../data.json';
import EditProfile from '@/profilePage/EditProfile';
import { Profile } from '@/data/models';
import { authOptions } from '@/lib/nextAuthOptions';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log(session)

  if (!session) {
    redirect("/signin");
  }

  const profile: Profile = data;
  return <EditProfile profile={profile} />;
}
