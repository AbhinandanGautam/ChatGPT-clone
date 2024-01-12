import modelList from "@/utils/modelsList";
import type { NextApiRequest, NextApiResponse } from "next";

type Option = {
    value: string;
    label: string;
}

type Data = {
  modelOptions: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const response = await modelList();

    const modelOptions = response.map((model) => ({
        value: model.id,
        label: model.id
    }))

  res.status(200).json({
    modelOptions
  });
}
