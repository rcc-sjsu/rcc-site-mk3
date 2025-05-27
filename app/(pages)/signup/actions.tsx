'use server'

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

interface SignUpState {
    error: string | null;
}

export async function signup(
    prevState: SignUpState,
    formData: FormData
): Promise<SignUpState> {
    const supabase = await createClient();

    const signupData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { data: signupReturn, error: signupError } = await supabase.auth.signUp(signupData);

    if (signupError) {
        console.log("Error Creating Account",signupError.message)
        return { error: signupError.message }
    }
    else {
        const userData = {
            system_id: signupReturn.user?.id,
            preferred_email: signupReturn.user?.email,
            first_name: formData.get('fname') as string,
            last_name: formData.get('lname') as string,
            preferred_name: formData.get('pname') as string,
            student_id: formData.get('sid') as string,
            sjsu_email: formData.get('sjsuEmail') as string,
            major: formData.get('major') as string,
            discord_username: formData.get('discord') as string,
            expected_graduation: formData.get('gradDate') as string,
        }

        const { error: insertionError } = await supabase.from('users').insert(userData)

        if (insertionError) {
            console.error("Error inserting student data: ", insertionError.message)
            return { error: insertionError.message }
        }
    }

    redirect('./login')
}