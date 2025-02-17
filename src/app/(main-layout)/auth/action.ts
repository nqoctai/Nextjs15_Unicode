"use server"

import { z } from "zod"

export const handleRegister = async (prevState: {
    message: string
    success: boolean
}
    , formData: FormData) => {
    const schema = z.object({
        name: z.string({
            required_error: 'Name is required'
        }).min(3, "Name must be at least 3 characters"),
        email: z.string({
            required_error: 'Email is required'
        }).email("Invalid email"),
        password: z.string({
            required_error: 'Password is required'
        }).min(6),
    });
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })
    if (!validatedFields.success) {
        const errors = validatedFields.error.flatten().fieldErrors;
        return {
            success: false,
            errors,
            message: "Registerd unsuccessfully"

        };
    }
    return {
        success: true,
        message: "Registered successfully"
    }


}