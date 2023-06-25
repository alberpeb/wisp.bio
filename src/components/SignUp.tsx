'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
//import InputText from '@/components/InputText';
import Hr from './Hr';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmpswd: '',
  });
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFormValues({ username: '', email: '', password: '', confirmpswd: '' });

    if (formValues.password !== formValues.confirmpswd) alert('passwords fields must be equal');

    try {
      /*const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: '/' });*/
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({...formValues, [event.target.name]: event.target.value})
  }

  return (
    <div className="container mx-auto mt-40 bg-white p-4">
      <div className="mx-auto my-12 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold">Register</h1>
        <form className="mt-4 flex flex-col" onSubmit={handleSubmit}>


          {/*<InputText
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
            value={formValues.confirmpswd}
            minLength={8}
            maxLength={30}
            required
          />*/}

          <input
            type="text"
            className="my-2 w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0"
            name="username"
            placeholder="username"
            value={formValues.username}
            onChange={handleChange}
            minLength={5}
            maxLength={20}
            required
          />

          <input
            type="email"
            className="my-2 w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
            minLength={14}
            maxLength={40}
            required
          />

          <input
            type="password"
            className="my-2 w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
            minLength={8}
            maxLength={30}
            required
          />

          <input
            type="password"
            className="my-2 w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0"
            name="confirmpswd"
            placeholder="confirm password"
            value={formValues.confirmpswd}
            onChange={handleChange}
            minLength={8}
            maxLength={30}
            required
          />

          <button
            type="submit"
            className="group my-2 h-10 items-center gap-2.5 rounded-md bg-zinc-950 px-3 align-middle text-white transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            Submit
          </button>

          <Link
            href="/login"
            className="ml-1 mt-2 text-sm tracking-wide text-slate-700 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-black"
          >
            Already have an account?
          </Link>

          <Hr message="or" />

          <button
            type="submit"
            className="group my-2 flex h-10 items-center gap-2.5 rounded-md bg-zinc-950 px-3 align-middle text-white transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            <Image
              src={'/btn_google.png'}
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
