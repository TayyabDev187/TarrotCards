// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message?: string;
    result?: string;
    success?: boolean;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === 'POST') {
        const data = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: "POST",
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [{
                    "role": "user", "content": `Question: ${req.body.question}\nCard: ${req.body.card}\nGenerate an answer according to the given card above in the tarrot card`
                }],
                "temperature": 0.7
            }),
            headers: {
                Authorization: 'Bearer ' + process.env.OPENAI_API,
                'Content-Type': "application/json"
            }
        }).then(r => r.json());
        res.status(200).json({ message: "", result: data.choices[0].message.content, success: true });
    } else {
        res.status(400).json({ message: "Method not allowed", success: false, result: "" })
    }
}
