import { google } from "@ai-sdk/google";
import { wrapLanguageModel } from "ai";

import { customMiddleware } from "./custom-middleware";

export const geminiProModel = wrapLanguageModel({
  model: google("gemini-2.5-pro-preview-05-06"),
  middleware: customMiddleware,
});
