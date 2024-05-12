import React, { useEffect, useState } from "react";
import SelectedCard from '../../components/resultPage/SelectedCard'
import { useAppContext } from "../_app";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Result() {
    const { prompt, setPrompt } = useAppContext();
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    async function getAnswer() {
        const { card, question } = prompt;
        try {
            setLoading(true);
            const { result, message, success } = await fetch('/api/get-answer', {
                method: "POST",
                body: JSON.stringify({ card, question }),
                headers: {
                    'Content-Type': "application/json"
                }
            }).then(r => r.json());

            if (success) {
                setResult(result);
            } else {
                toast.error(message);
            }

            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            toast.error(error?.message || error?.response?.data?.message)
        }

    }


    useEffect(() => {
        if (prompt.card && prompt.question) {
            getAnswer()
        }
    }, [prompt]);

    return (
        <div className="h-full w-full bg-[#0c104e] font-medium min-h-screen">
            <div className="container w-full mx-auto">
                <SelectedCard />
                <div className="lg:mx-40 flex flex-col items-center justify-center gap-y-7">
                    <p className="text-base text-[#9b9faa] text-center lg:text-xl">{prompt?.question || ""}</p>
                    <p className="text-base text-center lg:text-3xl bg-gradient-to-b text-transparent bg-clip-text from-[#d19242] to-[#eac5b0]">{loading ? "Loading..." : result}</p>

                    <Link href='/reading' className="bg-white hover:bg-transparent text-black border border-white hover:text-white transition-all ease-in-out duration-300 px-6 py-2 rounded-lg grid self-center w-fit hover:border-white" onClick={() => { setPrompt({ card: '', question: '' }) }}>
                        Shuffle the deck and ask another question
                    </Link>
                </div>

            </div>
        </div>
    )
}