'use client';

import Link from 'next/link';
import Image from 'next/image'
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import InputText from '@/components/InputText';
import Hr from './Hr';


export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpswd: "",
  });
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFormValues({ username: "", email: "", password: "" ,confirmpswd: ""});

    if (formValues.password !== formValues.confirmpswd)
      alert("passwords fields must be equal");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div className="container mt-40 mx-auto p-4 bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h1 className="text-3xl font-bold">Register</h1>
        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <InputText 
            type="text" 
            name="username" 
            placeholder="username"
            value={formValues.username}
            minLength={5} 
            maxLength={20} 
            required 
          />
          <InputText 
            type="email" 
            name="email" 
            placeholder="email"
            value={formValues.email}
            minLength={14} 
            maxLength={40} 
            required 
          />
          <InputText 
            type="password" 
            name="password" 
            placeholder="password"
            value={formValues.password}
            minLength={8} 
            maxLength={30} 
            required 
          />
          <InputText 
            type="password" 
            name="confirmpswd" 
            placeholder="confirm password" 
            minLength={8} 
            maxLength={30} 
            required 
          />

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
