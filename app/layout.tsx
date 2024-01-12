import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import NotificationProvider from "@/components/NotificationProvider";

export const metadata: Metadata = {
  title: "ChatGPT Clone",
  description: "ChatGPT clone for handling prompts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // console.log(session);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              
              <div className="bg-[#202123] max-w-xs h-screen overflow-x-hidden overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              <NotificationProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
