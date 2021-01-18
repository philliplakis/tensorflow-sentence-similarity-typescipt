import { expect, use } from "chai";
import deepEqualInAnyOrder from "deep-equal-in-any-order";
import { compare } from "../index";

const sentencesToTest = [
  "Trump permanant ban on Twitter",
  "Twitter ban on Trump is free speech violation ",
];

const knownResult = [
  [1, 0.827],
  [0.827, 1],
];

describe("tensorflow-sentence-similarity-typescipt", () => {
  use(deepEqualInAnyOrder);

  it("It should return the scores of similarity between the sentences.", async () => {
    const result = await compare(sentencesToTest);
    expect(result).to.deep.equalInAnyOrder(knownResult);
  }).timeout(15000);
});
