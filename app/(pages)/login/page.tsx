"use client";

import { useActionState, useState, useRef, ChangeEvent, FormEvent, FocusEvent } from "react";
import { login } from "./actions";
import styles from './page.module.css';
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from 'next/link';


// ----- Types -----
interface LoginFormFields {
  email: string;
  password: string;
}

interface LoginFormTouched {
  email: boolean;
  password: boolean;
}

interface LoginFormErrors {
  email: string;
  password: string;
}

interface LoginState {
  error: string | null;
}

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(login, { error: null });
    const formRef = useRef<HTMLFormElement>(null);

    const [fields, setFields] = useState<LoginFormFields>({
        email: "",
        password: "",
    });

    const [touched, setTouched] = useState<LoginFormTouched>({
        email: false,
        password: false,
    });

    const [errors, setErrors] = useState<LoginFormErrors>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);  // toggles password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Check if any errors exist for the required fields and if all are filled
    const isFormValid: boolean =
        Object.values(errors).every((e) => e === "") &&
        fields.email !== "" &&
        fields.password !== ""


    // Handle input changes
    const handleChange = (
    e: ChangeEvent<HTMLInputElement>
    ): void => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    };

    // Optionally, prevent submission if invalid (for extra safety)
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    if (!isFormValid) {
        e.preventDefault();
    }
    };

    // Handle field blur to set touched
    const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    if (name === "email" || name === "password" || name === "passConfirm") {
        setTouched((prev) => ({ ...prev, [name]: true }));
    }
    };

    return (
    // Main container: Flex row on large screens, column on smaller. Full height.
    // Added a subtle background to the whole page.
    <div className="flex flex-col lg:flex-row h-[85vh] lg:h-[88vh] font-sans mt-30 xs:mt-0 z-1">
      {/* Left Section: Form */}
      <div className="flex-1 flex flex-col items-center justify-center lg:w-1/2 lg:pl-10">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
          {/* Welcome Text */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 lg:mb-6 text-center lg:text-left tracking-wider">WELCOME BACK!</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-14 lg:mb-20 text-center lg:text-left tracking-wider">
           Don't have an account?{" "}
            {/* Link to Signin page */}
            <Link href="/signup" className="text-[#470085] hover:underline font-semibold">
              Sign up
            </Link>
          </p>

          <form
            ref={formRef}
            action={formAction}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <p className="font-bold text-lg sm:text-xl tracking-widest">Email</p>
            {/* Email Input */}
            <div className={styles['signup-input-container']}>
              <input
                type="email"
                name="email"
                placeholder="rcc.sjsu@gmail.com"
                className={`${styles['signup-input']} py-2 px-3 text-sm sm:py-2 sm:px-4 sm:text-base md:py-3 md:px-5 md:text-lg`}
                value={fields.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>
            {touched.email && errors.email && (
              <div className="ml-4 mb-2 text-red-500 text-sm">{errors.email}</div>
            )}
            
            {(state?.error && (state?.error === 'insert or update on table "users" violates foreign key constraint "users_system_id_fkey"')) && (
              <div className="mt-2 mb-2 text-center text-red-500 font-medium">
                Email is already in use
              </div>
            )}

            {/* Password Input */}
            <p className="font-bold text-lg sm:text-xl tracking-widest">Password</p>
            <div className={styles['signup-input-container']}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className={`${styles['signup-input']} py-2 px-3 text-base sm:py-2 sm:px-4 sm:text-lg md:py-3 md:px-5 md:text-xl`}
                value={fields.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {/* Password Toggle Icon */}
              <button
                type="button" // Important: type="button" to prevent form submission
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-purple-900 mb-3 mr-1" />
                ) : (
                  <EyeSlashIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-purple-900 mb-3 mr-1" />
                )}
              </button>
            </div>
            {touched.password && errors.password && (
              <div className="ml-4 mb-2 text-red-500 text-sm">{errors.password}</div>
            )}

            {/* Forget Password Link */}
            <div className="text-center mt-2 sm:mt-3 mb-2">
              <a href="#" className="text-[#470085] hover:underline font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider"> 
                Forget password?
              </a>
            </div>

            {/* Server-side error */}
            {(state?.error && (state?.error != 'insert or update on table "users" violates foreign key constraint "users_system_id_fkey"')) && (
              <div className="mt-2 mb-2 text-center text-red-500 font-medium">
                {state.error}
              </div>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              className={styles['sign-up-button']}
              disabled={!isFormValid || isPending}
            >
              {isPending ? "Signing in" : "Sign In"}
            </button>
          </form>
        </div>
      </div>

      {/* Right Section: Image and Gradient Blur */}
     <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden z-10">
        <Image
          src="/images/signup-images/SignupGraphic2.png"
          alt="Requirements Steps"
          layout="responsive"
          width={800}
          height={970} 
          className={`${styles['signup-graphic-shadow']} relative z-10 max-w-full lg:max-w-[80%] xl:max-w-[65%] h-auto rounded-lg lg:mt-20 lg:mr-0 xl:mb-20 xl:mr-20`}
          style={{objectFit: "contain"}}
        />
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/6 -translate-y-2/5
                   w-[80vw] h-[50vh] xl:w-[60vw] xl:h-[70vh]
                   rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600
                   opacity-25 blur-[200px] z-0 hidden lg:block"
      />
    </div>
  );
}
