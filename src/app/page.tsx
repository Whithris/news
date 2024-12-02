import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="flex items-center justify-center bg-white pt-20 min-h-screen">
        <Link className="px-10 py-4 bg-red-800 text-white font-bold text-2xl rounded-lg shadow-lg hover:bg-red-700 transition-all mb-64" href="news">
        Добро пожаловать! Нажмите, чтобы перейти к списку новостей
        </Link>
      </div>
    </main>
  );
}