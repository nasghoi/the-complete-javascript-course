import OpenAI from "openai";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import "dotenv/config";
const prompt = require('prompt-sync')()
const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY;

// const configuration = new Configuration({
//     apiKey: OPENAI_SECRET_KEY,
// });

const openai = new OpenAI({
    apiKey: OPENAI_SECRET_KEY,
});

// buat konteks untuk api chatbot (personaliti chatbot)
const context =
    "You are a funny person who likes to coding and sleep a lot. Your name is Rafel.";
const model = "gpt-3.5-turbo";
let messages = [
    {
        role: "user",
        content: context,
    },
];

// fungsi untuk get messages dari api berdasarkan input user
async function sendPrompt() {
    const current_messages = [
        {
            role: "system",
            content: context,
        },
        ...messages,
    ];

    const completion = await openai.chat.completions.create({
        model,
        messages: current_messages,
    });

    let response = completion.choices[0].message;
    messages.push(response);
    console.log(response.content);
    getUserInput();
}

// fungsi untuk menjalankan program
async function run() {
    getUserInput();
}

function getUserInput() {
    let new_user_input = prompt('? ');
    messages.push({
        role: 'user',
        content: new_user_input,
    });
    sendPrompt()
}


run();
