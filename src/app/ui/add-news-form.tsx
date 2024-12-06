"use client";
import { useState } from "react";

export default function AddNewsForm() {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>(""); 
  const [excerpt, setExcerpt] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/add-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, excerpt, text, image }),
      });

      if (response.ok) {
        setResponseMessage("Новости успешно добавлены!");
        // Очистка формы
        setTitle("");
        setDate("");
        setExcerpt("");
        setText("");
        setImage("");
      } else {
        const errorText = await response.text();
        setResponseMessage(`Error: ${errorText}`);
      }
    } catch (error: unknown) {
      setResponseMessage(`Error: ${error}`);
    }
  };

  return (
    <div>
      <form className="flex flex-col justify-center items-center text-white bg-red-800 py-8 px-12 space-y-4 rounded-lg shadow-lg w-full max-w-5xl mx-auto" onSubmit={handleSubmit}>

          <label className="font-semibold text-lg flex flex-col w-full max-w-3xl">
            Заголовок:
            <input className="mt-1 p-3 bg-white text-red-800 rounded-lg shadow-inner focus:ring-2 focus:ring-red-500 focus:outline-none"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label className="font-semibold text-lg flex flex-col w-full">
            Дата:
            <input className="mt-1 p-3 bg-white text-red-800 rounded-lg shadow-inner focus:ring-2 focus:ring-red-500 focus:outline-none"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>

          <label className="font-semibold text-lg flex flex-col w-full">
            Краткая выдержка:
            <textarea className="mt-1 p-3 bg-white text-red-800 rounded-lg shadow-inner resize-none focus:ring-2 focus:ring-red-500 focus:outline-none"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
            />
          </label>

          <label className="font-semibold text-lg flex flex-col w-full">
            Текст:
            <textarea className="mt-1 p-3 h-32 bg-white text-red-800 rounded-lg shadow-inner resize-none focus:ring-2 focus:ring-red-500 focus:outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </label>

          <label className="font-semibold text-lg flex flex-col w-full">
            URL картинки:
            <input className="mt-1 p-3 bg-white text-red-800 rounded-lg shadow-inner focus:ring-2 focus:ring-red-500 focus:outline-none"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          
        <button className="px-36 py-4 bg-white text-red-800 text-lg font-bold rounded-lg shadow-md hover:bg-red-700 hover:text-white transition-all" type="submit">Добавить новость</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}