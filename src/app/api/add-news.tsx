import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface AddNewsRequest extends NextApiRequest {
  body: {
    title: string;
    date: string; 
    excerpt: string;
    text: string;
    image?: string;
  };
}

export default async function handler(
  req: AddNewsRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, date, excerpt, text, image } = req.body;

    if (!title || !date || !excerpt || !text) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    try {
      // Добавляем новость в базу данных
      const newNews = await prisma.news.create({
        data: {
          title,
          date: new Date(date),
          excerpt,
          text,
          image,
        },
      });

      res
        .status(200)
        .json({ message: "News added successfully", data: newNews });
    } catch (error) {
      console.error("Error adding news:", error);
      res.status(500).json({ message: "Error adding news" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}