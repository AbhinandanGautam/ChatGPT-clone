import { adminDB } from "@/firebaseAdmin";
import query from "@/utils/queryApi";
import admin from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({
      answer: "Please provide prompt!",
    });
  }

  if (!chatId) {
    res.status(400).json({
      answer: "Not valid Chat ID",
    });
  }

  // OpenAi query
  const response = await query({ prompt, chatId, model });

  const message: Message = {
    text: response || "ChatGPT fails to answer.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-3B7EoJiI1WxE_ga3c8_r1TDdkmcg9La80QMuOLXTQ&s",
    },
  };

  await adminDB
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({
    answer: message.text,
  });
}
