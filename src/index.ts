import "@tensorflow/tfjs-node";
import * as TF from "@tensorflow-models/universal-sentence-encoder";
import { cosine } from "./cosine";

export const compare = async (
  arrayOfSentences: Array<string>
): Promise<Array<string>> => {
  try {
    const model = await TF.load();
    const embeddings = await model.embed(arrayOfSentences);
    const cosineMatrix = cosine(embeddings.arraySync());
    // console.log(cosineMatrix);
    return Promise.resolve(cosineMatrix);
  } catch (error) {
    throw new error(error);
  }
};
