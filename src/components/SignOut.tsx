import { signOut } from "next-auth/react";
import Link from "next/link";

export default function SignOut({style}: {style: string}) {
    return(
      <Link href="/" 
        onClick={() => signOut({ callbackUrl: "/" })}
        className={style}
      >
        Sign Out
      </Link>
    );
}