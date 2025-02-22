"use server"
import { error } from "console";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";



interface Error {
    status?: number;
    message?: string;

}

export const create = async (prevState: {
    message: string | undefined;
    success: boolean;
}, formData: FormData) => {
    try {
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        if (!title || !content) {
            const error = new Error('Title and content are required');
            (error as Error).status = 400;
            throw error;
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, completed: false })
        });
        if (!response.ok) {
            const error = new Error('Failed to create todo');
            (error as Error).status = 404;
            throw error;
        }
        // revalidatePath('/todos')
        revalidateTag('/todos')
        return {
            success: response.ok,
            message: 'Todo created successfully'
        }
    } catch (error) {
        return {
            success: false,
            message: (error as Error).status ? (error as Error).message : 'Something went wrong'
        }
    }

}

export const update = async (formData: FormData) => {
    try {
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        const id = formData.get('id') as string
        const completed = formData.get('completed') ? true : false
        if (!title || !content || !id) {
            const error = new Error('Title and content are required');
            (error as Error).status = 400;
            throw error;
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, completed: completed })
        });
        if (!response.ok) {
            const error = new Error('Failed to update todo');
            (error as Error).status = 404;
            throw error;
        }
        return {
            success: response.ok,
            message: 'Todo updated successfully'
        }
    } catch (error) {
        return {
            success: false,
            message: (error as Error).status ? (error as Error).message : 'Something went wrong'
        }
    }

}

export const deleteTodo = async (formData: FormData) => {
    const id = formData.get('id') as string
    await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos/${id}`, {
        method: 'DELETE',
    });
    redirect('/todos')
}