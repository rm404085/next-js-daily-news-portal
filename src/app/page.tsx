import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";


export default async function  Home() {
           const data = await fetch("https://news-api-next-js-three.vercel.app/api/news")
           const news = await data.json();
          //  console.log(news)
  return (
   <div>
    <Banner></Banner>

    <div >
      <h2 className="text-3xl font-bold my-10">Leatest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {
          news.slice(0,6).map((item:NewsItem) => {
          return  <NewsCard key={item?._id} item={item} ></NewsCard>
          })
        }
      </div>
      <NewsLetter></NewsLetter>


    </div>
    
   </div>
  );
}
