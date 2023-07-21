import Image from 'next/image';
import CustomLinks from '@/components/profile/CustomLinks';
import { ProfileModel, getUserByUsername } from '@/prisma/userService';
import NotFound from '@/components/profile/NotFound';
import MainLinks from '@/components/profile/MainLinks';
import Categories from '@/components/profile/Categories';

export const dynamicParams = true;

async function getUserProfile(username: string): Promise<ProfileModel | null> {
  try {
    return await getUserByUsername(username);    
  } catch (error: any) {
    throw new Error(error);
  }
}

export default async function Page(props: any) {
  const { username } = props.params;
  const user = await getUserProfile(username) as ProfileModel;
  
  if(!user) {
    return(<NotFound/>);
  }

  if(user) {
    return (
        <div className="mx-auto flex w-full flex-col items-center justify-center px-8 pt-16">
        <Image
            priority
            className="rounded-full"
            alt={user.name || ""}
            src={user.image || "/profile.png"}
            width={96}
            height={96}
        />
        <h1 className="mt-1 text-2xl font-bold text-gray-700">{user.name}</h1>
        <h1 className="mb-2 mt-2 text-base font-bold text-gray-400">@{user.username}</h1>
        <Categories categories={user.categories}/>
        <MainLinks mainLinks={user.mainLinks}/>
        <CustomLinks customLinks={user.customLinks}/>
        
        </div>
    );
  }
}
