"use client"
import fetchNews from '@/lib/fetchNews';
import { NewsItem } from '@/types/news';
import React, { useEffect, useState } from 'react';
import NewsCard from '../shared/NewsCard';
import SearchBar from './SearchBar';
import CategoryFillter from './CategoryFillter';



const NewsList = () => {
    const [search , setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(()=>{

        const getNews = async()=>{

            const data = await fetchNews(search, category);
            setNews(data);

        }
        getNews();
        console.log(search)

    }, [search, category])
    return (
        <div>
            
            <div className='flex justify-between items-center p-4' >
               <SearchBar onSearch={setSearch}></SearchBar>

               <CategoryFillter onCategoryChange={setCategory}></CategoryFillter>


            </div>

            {/* news card */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5'>
                {
                    news.map((item)=>(
                        <NewsCard key={item?._id} item={item}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default NewsList;