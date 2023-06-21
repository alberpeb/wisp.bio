'use client';

import Link from 'next/link';
import Image from 'next/image'
import InputText from '@/components/InputText';
import Hr from './Hr';

async function handleSubmit(event: any) {
  event.preventDefault();

  const data = {
    username: String(event.target.username.value),
    email: String(event.target.email.value),
    password: String(event.target.password.value),
    confirmpswd: String(event.target.confirmpswd.value),
  };

  if (data.password !== data.confirmpswd)
    alert("passwords must match");
}

export default function SignUp() {
  console.log("render times");
  return (
    <div className="container mt-40 mx-auto p-4 bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h1 className="text-3xl font-bold">Register</h1>
        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <InputText type="text" name="username" placeholder="username" minLength={5} maxLength={20} required />
          <InputText type="email" name="email" placeholder="email" minLength={14} maxLength={40} required />
          <InputText type="password" name="password" placeholder="password" minLength={8} maxLength={30} required />
          <InputText type="password" name="confirmpswd" placeholder="confirm password" minLength={8} maxLength={30} required />

          <button
            type="submit"
            className="group align-middle h-10 my-2 items-center gap-2.5 rounded-md text-white bg-zinc-950 px-3 transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            Submit
          </button>

          <Link href="/login" className="ml-1 mt-2 text-sm tracking-wide text-slate-700 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-black">
            Already have an account?
          </Link>
          
          <Hr message="or" />

          <button
            type="submit"
            className="flex group align-middle h-10 my-2 items-center gap-2.5 rounded-md text-white bg-zinc-950 px-3 transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            <Image src={"/btn_google.png"}
              loading="eager"
              priority={true}
              width={30}
              height={30} 
              alt="google" 
            />
            <span>Register with Google</span>
          </button>
          
        </form>
      </div>
    </div>
  );
}
