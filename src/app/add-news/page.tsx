"use server";
import AddNewsForm from "@/app/ui/add-news-form";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screnn p-8">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <AddNewsForm/>
        </main>
      </div>
  );
}