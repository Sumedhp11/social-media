"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../../sign-up/SignupSchema";
import { useState } from "react";
import Image from "next/image";

const SignupForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      avatar: undefined,
      username: "",
      password: "",
      email: "",
    },
  });

  const HandleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) form.setValue("avatar", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader?.result === null) return;
        setImagePreview(reader.result.toString());
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };
  function onSubmit(values: z.infer<typeof signupSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Avatar"
                    {...field}
                    type="file"
                    value={""}
                    accept=".jpg, .jpeg, .png, .svg, .gif, .mp4"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      HandleImageUpload(e)
                    }
                  />
                </FormControl>
                <FormMessage />
                {imagePreview && (
                  <div className="w-full h-20 ">
                    <Image
                      src={imagePreview as string}
                      alt="avatar"
                      className="w-36 rounded h-full object-contain"
                      width={80}
                      height={80}
                    />
                  </div>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Username" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Password"
                    {...field}
                    type="password"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <Button type="submit" className="w-full mt-5">
          Sign up
        </Button>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-black font-normal">Already an User?</span>
          <Link href={"/sign-in"} className="text-blue-700">
            Sign in
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
