import Image from "next/image";
import Link from "next/link";
import {news} from "@prisma/client";



export default async function NewsComponent({newsData, isOneNews}: {newsData: news[], isOneNews: boolean}) {
  //console.log(newsData[0]);
  return (
      <div className="grid grid-cols-1 gap-4 bg-gray-700">
        {newsData.map((elem) => (
          <Link href={`/news/${elem.id}`} key={elem.id} className={"group"}>
            <div key={elem.id}>
              <div className="font-bold">
                {elem.title}
              </div>
              {isOneNews && (
                <div>
                  <div>
                    Date: {elem.date.toDateString()}
                  </div>
                  <div>
                    Excerpt: {elem.excerpt}
                  </div>
                  <div>
                    Text: {elem.text}
                  </div>
                </div>
              )}
            </div>

          </Link>
        ))}
      </div>
  );
}