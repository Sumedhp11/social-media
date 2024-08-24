import React from "react";
import LeftBanner from "../component/common/LeftBanner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "../component/forms/SignupForm";

const Signup = () => {
  return (
    <div className="w-full h-full flex">
      <LeftBanner />
      <div className="flex-grow  flex items-center justify-center">
        <Card className="w-[70%] h-fit">
          <CardHeader>
            <CardTitle className="text-center">Sign Up</CardTitle>
            <CardDescription className="text-center ">
              Hii! Please Sign up
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
