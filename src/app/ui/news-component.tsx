import Image from "next/image";
import Link from "next/link";
import {news} from "@prisma/client";



export default async function NewsComponent({newsData, isOneNews}: {newsData: news[], isOneNews: boolean}) {
  //console.log(newsData[0]);
  return (
      <div className="grid grid-cols-1 gap-4 ">
        {newsData
          .sort((a, b) => { // Сортировка от нового к старому
            const dateA = new Date(a.date); 
            const dateB = new Date(b.date); 
            return dateB.getTime() - dateA.getTime(); 
          })
          .map((elem) => (
          <Link href={`/news/${elem.id}`} key={elem.id} className={"group"}>
            <div className="border-red-900 border-4 rounded-lg shadow-lg" key={elem.id}>
              {isOneNews ? (
                // Заголовок без эффектов hover для раскрытой новости
                <div className="px-10 py-4 bg-red-900 text-white font-bold text-xl flex justify-between items-center">
                  <div className="mr-2">{elem.title}</div>
                  <div className="ml-2">{`${elem.date.getDate()}/${elem.date.getMonth() + 1}/${elem.date.getFullYear()}`}</div>
                </div>
              ) : (
                // Заголовок с эффектами hover для списка новостей
                <div className="px-10 py-4 bg-red-900 text-white font-bold text-xl hover:bg-white hover:text-red-800 transition-colors flex justify-between items-center">
                  <div className="mr-2">{elem.title}</div>
                  <div className="ml-2">{`${elem.date.getDate()}/${elem.date.getMonth() + 1}/${elem.date.getFullYear()}`}</div>
                </div>
              )}
              {isOneNews && (
                <div className="flex justify-between bg-red-800 text-white">
                  {elem.image && (
                  <div className="flex justify-center items-center flex-shrink-0">
                    <Image 
                      src={elem.image} 
                      alt="Картинка не загрузилась =("
                      width={350} 
                      height={240}
                      className="w-full h-full" 
                    />
                  </div>)}
                  <div className="flex flex-col justify-center ml-4">
                    <div className="flex font-bold text-xl justify-start">
                      {elem.excerpt}
                    </div>
                    <div>
                      {elem.text}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
  );
}