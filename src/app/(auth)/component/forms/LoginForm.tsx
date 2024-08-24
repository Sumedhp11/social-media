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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "../../sign-in/LoginSchema";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  <div className="relative w-full">
                    <Input
                      placeholder="Enter Password"
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                    {showPassword ? (
                      <EyeOff
                        size={20}
                        className="absolute top-3 right-2 cursor-pointer"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <Eye
                        size={20}
                        className="absolute top-3 right-2 cursor-pointer"
                        onClick={(prev) => setShowPassword(true)}
                      />
                    )}
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <div className="w-full flex justify-end mt-3">
          <Link
            href={"/sign-up"}
            className="ml-auto text-sm font-normal text-[#877ABE]"
          >
            Forget Password
          </Link>
        </div>
        <Button type="submit" className="w-full mt-5">
          Sign In
        </Button>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-black text-sm font-normal">New Here?</span>
          <Link href={"/sign-up"} className="text-blue-700">
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
