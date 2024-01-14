import { Configuration, OpenAIApi } from "openai";

const configurations = new Configuration({
  //   organization: "org-2kSjCkJITroK6HwBZuFlWKXd",
  //   apikey: "XmkhH5CIS1R2oqkdPwUBT3BlbkFJdqjuDfX4VufwGxnzwpWA",
  organization: "org-2kSjCkJITroK6HwBZuFlWKXd",
  apiKey: "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",
});

export const openai = new OpenAIApi(configurations);
