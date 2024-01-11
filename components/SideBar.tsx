"use client";

import { signOut, useSession } from "next-auth/react";
import NewChatBtn from "./NewChatBtn";
import { useCollection } from "react-firebase-hooks/firestore"
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, 'users', session.user?.email!, 'chats')
  );

  // console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChatBtn */}
          <NewChatBtn />

          <div>{/* ModelSelection */}</div>

          {/* Map through different chats */}
          {chats?.docs.map( (chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Img"
          className="h-12 w-12 rounded-full mx-auto mb-2 cursor-pointer hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
