"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation'
export default function Head() {
    const router = useRouter()
    return <div className="text-white flex flex-col items-center font-bold bg-red-800 min-h-12">
            <div className="flex flex-row font-bold text-2xl min-h-10 mr-5 space-x-3 py-2">
                <span className="inline-block h-6 mt-2">SUPER</span>
                <span className="bg-white text-red-800 inline-block h-full py-2 px-2 flex-grow rounded-lg shadow-lg">MEGA</span>
                <span className="inline-block h-6 mt-2">NEWS</span>
            </div>
            <div className="flex-grow"></div> 
                <div className="flex flex-row justify-center w-full bg-red-900 py-3 space-x-8">
                    <div className="text-lg">
                        <Link href="/news" className="bg-transparent text-white py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors">
                        Новости
                        </Link>
                    </div>
                    <span className="text-white">|</span>
                    <div className="text-lg">
                        <Link href="/add-news" className="bg-transparent text-white py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors">
                        Добавить
                        </Link>
                    </div>
                </div>
            </div>


}
