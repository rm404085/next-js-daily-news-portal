import NewsList from '@/components/news/NewsList';


const newsPage = () => {
  
    
    return (
        <div>
           <div className='my-5'>
            <h1 className='text-xl font-bold py-6 '>Leatest News</h1>

            <div className='flex justify-between'>
               <NewsList></NewsList>
            </div>

           </div>
        </div>
    );
};

export default newsPage;
