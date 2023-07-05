'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from 'classnames';
import Hr from './Hr';
import { UserSignupForm } from '@/data/models';
import { UserSignup, userSignupValidationSchema } from '@/lib/validation';
import { hash } from '@/lib/hashPass';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSignup>({
    resolver: zodResolver(userSignupValidationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpswd: ""
    }
  });

  async function formSubmit(data: UserSignupForm) {
    
    try {
      data.password = await hash(data.password);
      //by now I will send hashed password if it already passed comparision
      data.confirmpswd = data.password;

      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if(!response.ok) {
        throw new Error('HTTP error! status: ' + response.status);
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch(error: any) {
      throw new Error(error);
    }
    //console.log("typeof response: ")
    //console.log(typeof response);
  }

  return (
    <div className="container mx-auto mt-40 bg-white p-4">
      <div className="mx-auto my-12 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold">Register</h1>
        <form className="mt-4 flex flex-col" onSubmit={handleSubmit(formSubmit)}>

          <input
            type="text"
            {...register("username")}
            placeholder="username"
            className={classNames("my-2 w-full rounded-md bg-gray-100 px-4 py-3 text-sm lowercase ",
              { "border-2 border-red-700" : errors.username },
              { "border-transparent focus:bg-white focus:ring-0 focus:border-gray-500" : !errors.username }
            )}
          />

          {errors.username && (
            <p className="text-xs italic text-red-700 ml-1">
              {errors.username?.message}
            </p>
          )}

          <input
            type="text"
            {...register("email")}
            placeholder="email"
            className={classNames("my-2 w-full rounded-md bg-gray-100 px-4 py-3 text-sm lowercase ",
              { "border-2 border-red-700" : errors.email },
              { "border-transparent focus:bg-white focus:ring-0 focus:border-gray-500" : !errors.email }
            )}
          />
          
          {errors.email && (
            <p className="text-xs italic text-red-700 ml-1">
              {errors.email?.message}
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

          <input
            type="text"
            {...register("confirmpswd")}
            placeholder="confirm your password"
            className={classNames("my-2 w-full rounded-md bg-gray-100 px-4 py-3 text-sm lowercase ",
              { "border-2 border-red-700" : errors.confirmpswd },
              { "border-transparent focus:bg-white focus:ring-0 focus:border-gray-500" : !errors.confirmpswd }
            )}
          />
          
          {errors.confirmpswd && (
            <p className="text-xs italic text-red-700 ml-1">
              {errors.confirmpswd?.message}
            </p>
          )}

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
