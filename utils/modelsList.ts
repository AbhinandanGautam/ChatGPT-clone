import openai from "./openAI"


const modelList = async () => {
    const list = await openai.models.list().then((res) => res.data);
    return list;
}

export default modelList;