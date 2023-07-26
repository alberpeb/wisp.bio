'use client';

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    router.push("/404");
    return(<>Not found</>);
}