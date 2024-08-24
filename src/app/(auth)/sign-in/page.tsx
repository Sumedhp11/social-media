import LeftBanner from "@/app/(auth)/component/common/LeftBanner";
import LoginForm from "@/app/(auth)/component/forms/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignIn = () => {
  return (
    <div className="w-full h-full flex">
      <LeftBanner />
      <div className="flex-grow  flex items-center justify-center">
        <Card className="w-[70%] h-fit">
          <CardHeader>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-center ">
              Hii! Welcome Back
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
