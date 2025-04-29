"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { GoogleIcon } from "@/Icons/svg_Icons";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    setIsLoading(true);
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center mx-4 md:mx-0 justify-center bg-gray-50">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <Card className="w-full max-w-md p-2 py-10 shadow-xl">
          <CardHeader className="space-y-3">
          <CardTitle className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 md:text-4xl text-3xl tracking-tight">
            Welcome to ChatApp
          </CardTitle>

          <CardDescription className="text-center text-gray-600 text-lg">
            Connect, chat, and collaborate seamlessly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full cursor-pointer h-12 text-lg font-medium flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300 transition-all"
            onClick={handleLogin}
          >
            <GoogleIcon className="h-10 w-10" />
            Continue with Google
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-sm text-gray-500 border-t pt-4 mt-2">
          <p>By continuing, you agree to our</p>
          <p className="flex gap-2">
            <a className="hover:text-blue-600 underline">Terms of Service</a>
            <span>•</span>
            <a className="hover:text-blue-600 underline">Privacy Policy</a>
          </p>
        </CardFooter>
      </Card>
      )}
    </div>
  );
};

export default page;
