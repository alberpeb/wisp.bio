import Link from 'next/link';
import SignUp from '@/components/SignUp';

export default function page() {
  return (
    <section>
      <Link href="/">Home</Link>
      <SignUp />
    </section>
  );
}
