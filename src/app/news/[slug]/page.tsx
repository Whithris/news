"use server";
import NewsComponent from "@/app/ui/news-component";
import { getNewsById } from "@/app/lib/data";

export default async function Page({ params }: { params: { slug: string }}) {
  //console.log(params);
  const {slug} = await params
  const newsData = await getNewsById(Number(slug));
  const newsArray = newsData ? [newsData] : [];
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screnn p-8">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <NewsComponent newsData = {newsArray} isOneNews={true}/>
        </main>
      </div>
  )
}