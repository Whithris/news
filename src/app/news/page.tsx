"use server";
import Image from "next/image";
import NewsComponent from "@/app/ui/news-component";
import { getAllNews } from "@/app/lib/data";



export default async function Home() {
  const newsData = await getAllNews();
  return (
    <main>
      <div>
        <p>Ниже должны находиться новости</p>
        <NewsComponent newsData={newsData} isOneNews={false}/>
      </div>
    </main>
  );
}