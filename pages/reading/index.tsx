import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface PromptState {
  question: string;
  card: string;
}

const Reading = () => {
  const navigate = useRouter();
  const [prompt, setPrompt] = useState<PromptState>({ question: "", card: "" });
  const [text, setText] = useState("");
  const [isOpen, setOpen] = useState(false);
  function handleSetPrompt() {
    setPrompt({
      question: text ? text : "",
      card: "",
    });
  }

  console.log(prompt, text, "DATA");
  const listItems = [
    "Think about it and enter a question in the input field",
    "Pick a card from a deck",
    "Get an answer to the entered question from the card that you got",
    "You can shuffle and ask a new question or save the results of the session.",
  ];

  return (
    <div className="bg-[#121212] flex justify-center items-center w-full h-screen">
      <div className="border-1 bg-black rounded-md border-blue-900 py-10 px-10">
        {!isOpen ? (
          <div>
            <h2 className="text-white text-xl text-center font-bold mb-6">
              Instructions
            </h2>
            <ol className="list-decimal pl-6 pr-10 space-y-2 mb-6">
              {listItems.map((item, index) => (
                <li key={index} className="text-white font-semibold">
                  {item}
                </li>
              ))}
            </ol>
            <div className="flex justify-center items-center">
              <Button
                className="bg-[#7557fa] text-[white] font-semibold rounded-md px-6 py-2"
                onClick={() => setOpen(true)}
              >
                Got it!
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-white text-xl text-center font-bold mb-6">
              Enter your question
            </h2>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              className="bg-white border-none rounded-md w-[480px] pl-4 py-4 hover:border-2 hover:border-purple-500"
              placeholder="Your question"
            />
            <div className="flex justify-center items-center mt-4">
              <Button
                className="bg-[#7557fa] text-[white] text-md font-semibold rounded-md px-8 py-4"
                onClick={() => {
                  setOpen(true);
                  handleSetPrompt();
                  navigate.push("reading/cardDeck");
                }}
              >
                Let's pull the card
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reading;
