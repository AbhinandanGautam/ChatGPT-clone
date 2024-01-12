import ChatInput from "@/components/ChatInput"
import ChatWindow from "@/components/ChatWindow"

type Props = {
  params: {
    id: string;
  }
}

function ChatPage({ params: { id }}:Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden px-2 py-2">
      <ChatWindow chatId={id} />
      <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage