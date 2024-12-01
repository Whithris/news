"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation'
export default function Head() {
    const router = useRouter()
    return <div className="text-white flex flex-col items-center font-bold bg-red-800">
        <div className="flex flex-row font-bold text-2xl min-h-12 mr-5">
            <span className="inline-block h-7 mt-2">SUPER</span>
            <span className="bg-white text-red-800 inline-block h-8 mt-2">MEGA</span>
            <span className="inline-block h-7 mt-2">NEWS</span></div>
        <div className="flex flex-row justify-center w-full bg-red-900">
            <div className="mr-10"><Link href="/news">Новости</Link></div>
            <span>|</span>
            <div className="ml-10"><Link href="/news">Добавить</Link></div>
    </div>
</div>


}
