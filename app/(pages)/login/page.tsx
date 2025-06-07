"use client";

import { useActionState } from "react";
import { login } from "./actions";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRef } from "react";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, { error: null });
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex h-screen p-12">
      <form
        ref={formRef}
        action={formAction}
        className="m-auto h-1/2 w-9/10 sm:w-7/10 lg:w-6/10 flex flex-col justify-evenly"
      >
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <UserIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full py-6 sm:py-8 pl-12 pr-4 mb-1 bg-purple-800 font-bold text-white text-lg xl:text-xl placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {state?.error && state.error === "Email not confirmed" && (
          <div className="mt-2 mb-2 text-center text-red-500 font-medium">
            {state.error}
          </div>
        )}

        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pr-4">
            <LockClosedIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full py-6 sm:py-8 pl-12 pr-4 bg-purple-800 text-white font-bold text-lg xl:text-xl placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {state?.error && state.error != "Email not confirmed" && (
          <div className="mt-2 mb-2 text-center text-red-500 font-medium">
            {state.error}
          </div>
        )}

        <div className="text-center">
          <Link className="text-white" href="./password-recovery">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-3/5 py-6 sm:py-8 mt-2 bg-purple-800 text-white font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 mx-auto"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "LOG IN"}
        </button>
      </form>
    </div>
  );
}
