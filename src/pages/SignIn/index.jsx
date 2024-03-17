import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Text, Button, Input, Img, Heading } from "../../components";

export default function SignInPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard_UI</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col justify-center w-full">
        <div className="flex flex-col items-center w-[41%] md:w-full px-14 py-[171px] md:p-5 bg-black-900">
          <Heading size="xl" as="h1" className="mt-[292px] mb-[301px] !text-white-A700">
            Board.
          </Heading>
        </div>
        <div className="flex flex-col items-start justify-center pl-[223px] pr-14 py-[223px] md:p-5 bg-gray-100 flex-1">
        Link to <Link to="/dashboard" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Dashboard
          </Link>
          <a href="#" className="mt-[39px] ml-[21px] md:ml-0">
            <Heading size="lg" as="h2">
              Sign In
            </Heading>
          </a>
          <Text size="md" as="p" className="mt-1 ml-[21px] md:ml-0 !text-black-900">
            Sign in to your account
          </Text>
          <div className="flex justify-end w-[70%] md:w-full mt-[23px] ml-[21px] gap-[25px] md:ml-0">
            <Button
              shape="round"
              leftIcon={<Img src="images/img_googleicon_1.svg" alt="google-icon 1" />}
              className="w-full gap-2.5"
            >
              Sign in with Google
            </Button>
            <Button
              shape="round"
              leftIcon={<Img src="images/img_vector.svg" alt="Vector" />}
              className="w-full gap-2.5 sm:px-5"
            >
              Sign in with Apple
            </Button>
          </div>
          <div className="flex flex-col items-center w-[70%] md:w-full mt-[25px] mb-[5px] ml-[21px] gap-[21px] md:ml-0">
            <div className="flex flex-col self-stretch items-start p-[30px] sm:p-5 bg-white-A700 rounded-[20px]">
              <Text size="md" as="p" className="!text-black-900">
                Email address
              </Text>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder={`johndoe@gmail.com`}
                className="self-stretch mt-2 sm:pr-5"
              />
              <Text size="md" as="p" className="mt-5 !text-black-900">
                Password
              </Text>
              <Input
                color="gray_200"
                shape="round"
                type="password"
                name="password"
                placeholder={`••••••••`}
                className="self-stretch mt-2 sm:pr-5"
              />
              <a href="#" className="mt-[21px]">
                <Text size="md" as="p" className="!text-blue-700">
                  Forgot password?
                </Text>
              </a>
              <Button color="black_900" size="sm" shape="round" className="w-full mt-[17px] sm:px-5 font-bold">
                Sign In
              </Button>
            </div>
            <Text size="md" as="p" className="text-center">
              <span className="text-gray-600">Don’t have an account? </span>
              <span className="text-blue-700">Register here</span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
