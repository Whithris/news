import prisma from "../src/app/lib/db";

async function main() {
  const newArray = [
    {
      title:
        "Котик научился приносить газету вместо собаки и стал звездой сети",
      date: new Date("2024-11-10"),
      excerpt:
        "Умный кот по кличке Марс доказал, что собаки — не единственные помощники в доме.",
      text: 'В небольшом городке в Сибири кот Марс стал сенсацией после того, как его владелец снял видео, где тот приносит утреннюю газету с порога. По словам хозяина, кот самостоятельно научился этому, наблюдая за собакой. Видео моментально разлетелось по соцсетям, а Марс стал звездой с миллионами просмотров. Теперь коту каждый день приходят виртуальные "газеты" от его поклонников в виде мемов и рисунков. Хозяин шутит, что Марс мог бы пойти работать почтальоном, если бы не был так привязан к дивану.',
      image: "",
    },
    {
      title: "Кот перехитрил робопылесос",
      date: new Date("2024-11-11"),
      excerpt: "Усатый изобрел свой способ отключать раздражающего уборщика.",
      text: "Кот по имени Сырник стал героем сети, когда хозяева заметили, как он умышленно нажимает лапой на кнопку выключения робопылесоса. Видео, где Сырник с невозмутимым видом жмёт 'выключить' и гордо уходит с места преступления, набрало миллионы просмотров. Теперь кот получает тонны лайков и комментариев в стиле 'вот это интеллект!' и 'куда там ИИ до такого уровня!'.",
      image: "",
    },
    {
      title: "Кот устроил забастовку, требуя открыть дверь холодильника",
      date: new Date("2024-11-12"),
      excerpt:
        "Чёрный котик из Екатеринбурга доказал, что голод — двигатель хитрости.",
      text: "Кот Филимон из Екатеринбурга устроил акцию протеста: он лег перед холодильником и издавал 'мяукающие' лозунги, пока хозяйка не сдалась и не угостила его сосиской. Соседи утверждают, что Филимон — настоящий профсоюзный лидер среди домашних животных.",
      image: "",
    },
  ];

  for (const newsData of newArray) {
    await prisma.news.upsert({
      where: { title: newsData.title },
      update: {
        date: newsData.date,
        excerpt: newsData.excerpt,
        text: newsData.text,
        image: newsData.image,
      },
      create: {
        title: newsData.title,
        date: newsData.date,
        excerpt: newsData.excerpt,
        text: newsData.text,
        image: newsData.image,
      },
    });
    console.log("Upserted news: ${newsData.title}");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });