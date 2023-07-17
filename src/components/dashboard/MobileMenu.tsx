import Link from 'next/link';
import SignOut from '@/components/SignOut';

export default function MobileMenu() {
  return(
      <div className="block fixed inset-x-0 bottom-0 z-10 bg-white border-t border-gray-200">
        <div className="flex p-3 justify-between">
          <Link
          className="group block w-full py-3 text-center rounded-md transition-all duration-500 hover:bg-neutral-200"
          href={"/dashboard/profile"}>
              Profile
          </Link>
          <Link
          className="group block w-full py-3 text-center rounded-md transition-all duration-500 hover:bg-neutral-200"
          href={"/dashboard/user"}>
              User
          </Link>
          <SignOut style={"group block w-full py-3 text-center rounded-md transition-all duration-500 hover:bg-neutral-200"}/>
        </div>
      </div>
  );
}
