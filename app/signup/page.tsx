import Link from 'next/link';
import SignUp from '@/components/SignUp';


export default function page() {

  return (
    <main>
      <Link href="/">Home</Link>

      <SignUp />
    </main>
  );
}
