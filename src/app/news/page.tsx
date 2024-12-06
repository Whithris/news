"use server";
import Image from "next/image";
import NewsComponent from "@/app/ui/news-component";
import { getAllNews } from "@/app/lib/data";



export default async function Home() {
  const newsData = await getAllNews();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screnn p-8">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <NewsComponent newsData = {newsData} isOneNews={false}/>
        </main>
      </div>
  );
}