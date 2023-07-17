import Link from 'next/link';
import SignOut from '@/components/SignOut';

export default function DesktopMenu() {
    return(
        <div className="flex flex-col p-3 w-40 border-r border-gray-200">
            <Link
            className="group block w-full py-2 pl-3 rounded-md transition-all duration-500 hover:bg-neutral-200"
            href={"/dashboard/profile"}>
                Profile
            </Link>
            <Link
            className="group block w-full py-2 pl-3 rounded-md transition-all duration-500 hover:bg-neutral-200"
            href={"/dashboard/user"}>
                User
            </Link>
            <SignOut style={"group block w-full py-2 pl-3 rounded-md transition-all duration-500 hover:bg-neutral-200"}/>
        </div>
    );
}