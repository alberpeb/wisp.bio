'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import classNames from 'classnames';
import Hr from './Hr';
import { UserSigninForm } from '@/data/models';
import { UserSignin, userSigninValidationSchema } from '@/lib/validation';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSignin>({
    resolver: zodResolver(userSigninValidationSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    }
  });
  const {data: session} = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session) {
      router.push("/dashboard");
    }
  });

  async function formSubmit(data: UserSigninForm) {
    
    signIn("credentials",{
        usernameOrEmail: data.usernameOrEmail,
        password: data.password, 
        redirect: false
    }).then(response => {
      if(response?.error) {
        throw new Error(response.error);
      } else {
        //redirect
      }
    }).catch((error) => {
      throw new Error(error);
    });
  }

  return (
    <div className="container mx-auto mt-40 bg-white p-4">
      <div className="mx-auto my-12 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <form className="mt-4 flex flex-col" onSubmit={handleSubmit(formSubmit)}>

          <input
            type="text"
            {...register("usernameOrEmail")}
            placeholder="username or email"
            className={classNames("my-2 w-full rounded-md bg-gray-100 px-4 py-3 text-sm lowercase ",
              { "border-2 border-red-700" : errors.usernameOrEmail },
              { "border-transparent focus:bg-white focus:ring-0 focus:border-gray-500" : !errors.usernameOrEmail }
            )}
          />

          {errors.usernameOrEmail && (
            <p className="text-xs italic text-red-700 ml-1">
              {errors.usernameOrEmail?.message}
            </p>
          )}

          <input
            type="text"
            {...register("password")}
            placeholder="password"
            className={classNames("my-2 w-full rounded-md bg-gray-100 px-4 py-3 text-sm lowercase ",
              { "border-2 border-red-700" : errors.password },
              { "border-transparent focus:bg-white focus:ring-0 focus:border-gray-500" : !errors.password }
            )}
          />
          
          {errors.password && (
            <p className="text-xs italic text-red-700 ml-1">
              {errors.password?.message}
            </p>
          )}

          <button
            type="submit"
            className="group my-2 h-10 items-center gap-2.5 rounded-md bg-zinc-950 px-3 align-middle text-white transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            Submit
          </button>

          <Link
            href="/signup"
            className="ml-1 mt-2 text-sm tracking-wide text-slate-700 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-black"
          >
            Don&apos;t have an account?
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
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}
