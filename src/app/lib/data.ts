import { error } from "console";
import prisma from "./db";
import { news, PrismaClient } from "@prisma/client"
import { unstable_noStore as noStore } from "next/cache";
import { Prisma } from "@prisma/client"

export async function addNews(newsData: Prisma.newsCreateInput) {
  noStore();
  try {
    console.log('addNews');
    const newNews = await prisma.news.create({data: newsData, });
    return newNews;
  } catch (error) {
    console.error("Error adding news:", error);
    throw new Error("Failed to add news.");
  }
}
export async function getAllNews() {
  noStore();
  try {
    console.log('getAllNews');
    const data = await prisma.news.findMany();
    return data;
    
  } catch (error) {
    console.error("DB Error:", error);
    throw new Error("Failed to fetch employee data.")
  }
}

export async function getNewsById(id: number) {
  noStore();
  try {
    console.log('getNewsById');
    const data = await prisma.news.findUnique(
      {
        where: {id}
      }
    );
    return data;
  } catch (error) {
    console.error("DB Error:");
    throw new Error("Failed to fetch news data.")
  }
}