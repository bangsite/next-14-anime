"use client"
import React from 'react';
import * as z from "zod";
import {Icon} from "@iconify/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {toast} from "@/components/ui/use-toast";


const FormSchema = z.object({
    keyWord: z.string()
})
export const SearchTop = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {keyWord: ""},
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
            <div className="flex items-center relative">
                <Input type="text" placeholder="Enter keyword ..."/>
                <Button className="absolute right-0 top-0 bottom-0 border-l rounded-l-none" variant="ghost">
                    <Icon icon="ion:search-outline" height={24} color="#666"/>
                </Button>
            </div>

    )
}
