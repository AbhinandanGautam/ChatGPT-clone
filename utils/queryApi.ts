import openai from "./openAI";

type Props = {
  prompt: string;
  chatId: string;
  model: string;
};

const query = async ({ prompt, chatId, model }: Props) => {
  const res = await openai.chat.completions
    .create({
      messages: [{
        role: 'system',
        content: prompt,
      }],
      model
    })
    .then((res) => res.choices[0].message.content)
    .catch(
      (err) => `ChatGPT not able to find answer. (Error : ${err.message})`
    );

    console.log(res);

    return res;
};

export default query;
