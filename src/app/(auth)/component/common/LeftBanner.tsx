import React from "react";
import signinphoto from "../../../../../public/login-page-image.jpg";
import Image from "next/image";
const LeftBanner = () => {
  return (
    <div className="hidden md:flex w-[45%] flex-col items-center justify-center bg-purple-100 h-full">
      <div className="w-[90%] h-[90%]">
        <Image
          src={signinphoto}
          className="h-full w-full object-cover rounded-md"
          alt="Sign-in photo"
        />
      </div>
    </div>
  );
};

export default LeftBanner;
