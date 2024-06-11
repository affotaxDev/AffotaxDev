'use server';

import { getFormData } from "@/lib/getFormData";










//  SEND MESSAGE

export async function sendMessage(formData) {
        

        const {name, email, service, message} = getFormData(formData, 'name', 'email', 'service', 'message');

        console.log(email, name)
}