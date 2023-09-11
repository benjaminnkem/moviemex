"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

interface ErrorProp {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProp) {
  useEffect(() => {
    toast.error("Sorry, Movie cannot be found");
  }, [error]);

  return (
    <div className="w-full min-h-screen grid place-content-center text-center">
      <h2 className="text-2xl font-bold">Movie cannot be found 😥</h2>
      <button
        onClick={() => reset()}
        className="bg-rose-500 px-6 py-2 rounded-full mt-2 max-w-[10rem] mx-auto text-white hover:bg-rose-600 duration-200"
      >
        Try again
      </button>
    </div>
  );
}
