'use client'

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-3B7EoJiI1WxE_ga3c8_r1TDdkmcg9La80QMuOLXTQ&s"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() => signIn('google')} className="font-bold text-3xl animate-pulse">Sign In to ChatGPT</button>
    </div>
  );
}

export default Login;
