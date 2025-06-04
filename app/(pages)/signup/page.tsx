"use client";

import { useActionState, FormEvent } from "react";
import { signup } from "./actions";
import { UserIcon, LockClosedIcon, EnvelopeIcon, IdentificationIcon, AcademicCapIcon, ChatBubbleOvalLeftIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import { useRef, useState, useEffect, ChangeEvent, FocusEvent } from "react";

// ----- Types -----
interface SignupFormFields {
  fname: string;
  lname: string;
  pname: string;
  sid: string;
  email: string;
  sjsuEmail: string;
  major: string;
  discord: string;
  gradDate: string;
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
    pname: "",
    sid: "",
    email: "",
    sjsuEmail: "",
    major: "",
    discord: "",
    gradDate: new Date().toISOString().slice(0, 10),
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
    <div className="flex p-25 m-5">
      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit}
        className="m-auto h-full w-2/5 flex flex-col justify-evenly"
      >
        {/* First Name - no validation */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <UserIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.fname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name - no validation */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <UserIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.lname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Preferred Name - no validation */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <UserIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="text"
            name="pname"
            placeholder="Preferred Name"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.pname}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Student ID - no validation */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <IdentificationIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="text"
            name="sid"
            placeholder="Student ID"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.sid}
            onChange={handleChange}
            required
          />
        </div>

        {/* Preferred Email */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <EnvelopeIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Preferred Email"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.email && errors.email && (
            <div className="mt-1 text-red-500 text-sm">{errors.email}</div>
          )}
        </div>

        {(state?.error && (state?.error === 'insert or update on table "users" violates foreign key constraint "users_system_id_fkey"')) && (
          <div className="mt-2 mb-2 text-center text-red-500 font-medium">
            Email is already in use
          </div>
        )}

        {/* SJSU Email */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <EnvelopeIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="email"
            name="sjsuEmail"
            placeholder="SJSU Email"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.sjsuEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.email && errors.email && (
            <div className="mt-1 text-red-500 text-sm">{errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <LockClosedIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.password && errors.password && (
            <div className="mt-1 text-red-500 text-sm">{errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <LockClosedIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="password"
            name="passConfirm"
            placeholder="Confirm Password"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.passConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.passConfirm && errors.passConfirm && (
            <div className="mt-1 text-red-500 text-sm">{errors.passConfirm}</div>
          )}
        </div>

        {/* Major - no validation */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <BookOpenIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="text"
            name="major"
            placeholder="Major"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.major}
            onChange={handleChange}
            required
          />
        </div>

        {/* Discord Name - no validation */}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <ChatBubbleOvalLeftIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="text"
            name="discord"
            placeholder="Discord Username"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.discord}
            onChange={handleChange}
            required
          />
        </div>

        {/* Graduation Date*/}
        <div className="relative w-full my-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <AcademicCapIcon className="h-5 w-5 text-white" />
          </span>
          <input
            type="date"
            name="gradDate"
            placeholder="Graduation Date"
            className="w-full py-4 pl-12 pr-4 bg-purple-800 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={fields.gradDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Server-side error */}
        {(state?.error && (state?.error != 'insert or update on table "users" violates foreign key constraint "users_system_id_fkey"')) && (
          <div className="mt-2 mb-2 text-center text-red-500 font-medium">
            {state.error}
          </div>
        )}

        <button
          type="submit"
          className="w-3/5 my-5 py-3 bg-purple-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 mx-auto"
          disabled={!isFormValid || isPending}
        >
          {isPending ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
