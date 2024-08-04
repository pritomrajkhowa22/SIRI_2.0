"use client";
import Image from "next/image";
import { SettingsIcon } from "lucide-react";
import Messages from "@/components/Messages";
import Recoder from "@/components/Recoder";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import transcript from "@/actions/transcript";
import VoiceSynthesiser from "@/components/VoiceSynthesiser";

const initialState = {
  sender: "",
  response: "",
  id: "",
};

export type Message = {
  sender: string;
  response: string;
  id: string;
};

export default function Home() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const [state, formAction] = useFormState(transcript, initialState);
  const [messages, setMessages] = useState<Message[]>([]);
  const [displaySettings, setDisplaySettings] = useState(false);
  // Responsible for updating the messages when the Server Action completes
  useEffect(() => {
    if (state.response && state.sender) {
      setMessages((messages) => [
        {
          sender: state.sender || "",
          response: state.response || "",
          id: state.id || "",
        },
        ...messages,
      ]);
    }
  }, [state]);

  const uploadAudio = (blob: Blob) => {
    const file = new File([blob], "audio.webm", { type: blob.type });

    // set the file as the value of the hidden file input field
    if (fileRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileRef.current.files = dataTransfer.files;

      // simulate a click and submit the form
      if (submitButtonRef.current) {
        submitButtonRef.current.click();
      }
    }
  };
  console.log(messages);
  return (
    <main className="bg-[#60a5fa] h-screen overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between fixed top-0 text-white w-full p-5">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />

        <SettingsIcon
          size={40}
          className="p-2 m-2 rounded-full cursor-pointer bg-[#3b82f6] text-black transition-all ease-in-out duration-150 hover:bg-[#1d4ed8] hover:text-white"
          onClick={() => setDisplaySettings(!displaySettings)}
        />
      </header>

      {/* form */}
      <form action={formAction} className="flex flex-col bg-black">
        <div className="flex-1 bg-gradient-to-b from-[#60a5fa] to-black">
          <Messages messages={messages} />
        </div>
        {/* hidden fields */}
        <input type="file" name="audio" hidden ref={fileRef} />
        <button type="submit" hidden ref={submitButtonRef}></button>

        <div className="fixed bottom-0 w-full overflow-hidden bg-black rounded-t-3xl">
          {/* Recorder */}
          <Recoder uploadAudio={uploadAudio} />
          <div>
            <VoiceSynthesiser state={state} displaySettings={displaySettings} />
          </div>
        </div>
      </form>
      <div className="text-white">designed by Pritom and Abhijit</div>
    </main>
  );
}
