import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import OpenAI, { ClientOptions } from "openai"; // Import ClientOptions from OpenAI module

dotenv.config();

const router = express.Router();

const config: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY, // Pass apiKey directly
};

const openai = new OpenAI(config);

router.route("/").get((req: Request, res: Response) => {
  res.send("hello from dall-ee!!");
});

router.route("/").post(async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      prompt,
      size: "1024x1024",
      n: 1,
      response_format: "b64_json",
    });
    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
