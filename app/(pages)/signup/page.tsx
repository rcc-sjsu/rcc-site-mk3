"use client";

import { useActionState, FormEvent } from "react";
import { signup } from "./actions";
import { UserIcon, LockClosedIcon, EnvelopeIcon, IdentificationIcon, AcademicCapIcon, ChatBubbleOvalLeftIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import { useRef, useState, useEffect, ChangeEvent, FocusEvent } from "react";
import styles from './page.module.css';

// ----- Types -----
interface SignupFormFields {
  fname: string;
  lname: string;
  email: string;
  password: string;
  passConfirm: string;
}

interface SignupFormTouched {
  email: boolean;
  password: boolean;
  passConfirm: boolean;
}

interface SignupFormErrors {
  email: string;
  password: string;
  passConfirm: string;
}

interface SignupState {
  error: string | null;
}

// ----- Helper Functions -----
function validatePassword(password: string): boolean {
  const minLength = /.{8,}/;
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
  const upper = /[A-Z]/;
  const number = /[0-9]/;
  return (
    minLength.test(password) &&
    specialChar.test(password) &&
    upper.test(password) &&
    number.test(password)
  );
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ----- Component -----
export default function SignUpPage(): React.JSX.Element {
  const [state, formAction, isPending] = useActionState<SignupState, FormData>(
    signup,
    { error: null }
  );
  const formRef = useRef<HTMLFormElement>(null);

  const [fields, setFields] = useState<SignupFormFields>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    passConfirm: "",
  });

  const [touched, setTouched] = useState<SignupFormTouched>({
    email: false,
    password: false,
    passConfirm: false,
  });

  const [errors, setErrors] = useState<SignupFormErrors>({
    email: "",
    password: "",
    passConfirm: "",
  });

  // Validate fields whenever they change
  useEffect(() => {
    setErrors({
      email:
        fields.email && !validateEmail(fields.email)
          ? "Please enter a valid email address."
          : "",
      password:
        fields.password && !validatePassword(fields.password)
          ? "Password must be at least 8 characters, include a capital letter, a number, and a special character."
          : "",
      passConfirm:
        fields.passConfirm && fields.passConfirm !== fields.password
          ? "Passwords do not match."
          : "",
    });
  }, [fields]);

  // Check if any errors exist for the required fields and if all are filled
  const isFormValid: boolean =
    Object.values(errors).every((e) => e === "") &&
    fields.email !== "" &&
    fields.password !== "" &&
    fields.passConfirm !== "";

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // Handle field blur to set touched
  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    if (name === "email" || name === "password" || name === "passConfirm") {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  // Optionally, prevent submission if invalid (for extra safety)
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    if (!isFormValid) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex p-4 mt-26 mx-auto h-full items-center justify-center sm:p-8 sm:mt-24 lg:p-16 lg:mt-6">
      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit}
        className="m-auto h-full w-full flex flex-col justify-evenly p-4 sm:w-4/5 sm:p-6 md:w-3/4 md:p-8 lg:w-3/5 lg:p-10"
      >
        {/* First Name - no validation */}
        <div className={styles['signup-input-container']}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-6 sm:pl-8 md:pl-10">
            <UserIcon className={styles['icon-style']} />
          </span>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className={styles['signup-input']}
            value={fields.fname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name - no validation */}
        <div className={styles['signup-input-container']}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-6 sm:pl-8 md:pl-10">
            <UserIcon className={styles['icon-style']} />
          </span>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className={styles['signup-input']}
            value={fields.lname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Preferred Email */}
        <div className={styles['signup-input-container']}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-6 sm:pl-8 md:pl-10">
            <EnvelopeIcon className={styles['icon-style']} />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Preferred Email"
            className={styles['signup-input']}
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        {touched.email && errors.email && (
          <div className="ml-14 text-red-500 text-sm">{errors.email}</div>
        )}
  

        {(state?.error && (state?.error === 'insert or update on table "users" violates foreign key constraint "users_system_id_fkey"')) && (
          <div className="mt-2 mb-2 text-center text-red-500 font-medium">
            Email is already in use
          </div>
        )}

        {/* Password */}
        <div className={styles['signup-input-container']}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-6 sm:pl-8 md:pl-10">
            <LockClosedIcon className={styles['icon-style']} />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles['signup-input']}
            value={fields.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        {touched.password && errors.password && (
          <div className="ml-4 text-red-500 text-sm sm:ml-6 md:ml-8">{errors.password}</div>
        )}

        {/* Confirm Password */}
        <div className={styles['signup-input-container']}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-6 sm:pl-8 md:pl-10">
            <LockClosedIcon className={styles['icon-style']} />
          </span>
          <input
            type="password"
            name="passConfirm"
            placeholder="Confirm Password"
            className={styles['signup-input']}
            value={fields.passConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        {touched.passConfirm && errors.passConfirm && (
          <div className="ml-4 text-red-500 text-sm sm:ml-6 md:ml-8">{errors.passConfirm}</div>
        )}

        {/* Server-side error */}
        {(state?.error && (state?.error != 'insert or update on table "users" violates foreign key constraint "users_system_id_fkey"')) && (
          <div className="mt-2 mb-2 text-center text-red-500 font-medium">
            {state.error}
          </div>
        )}

        <button
          type="submit"
          className={styles['get-started']}
          disabled={!isFormValid || isPending}
        >
          {isPending ? "Signing up..." : "GET STARTED"}
        </button>
      </form>
    </div>
  );
}
