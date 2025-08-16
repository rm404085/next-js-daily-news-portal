import React from 'react';

const newsPage = () => {
    return (
        <div>
           <div className='my-5'>
            <h1 className='text-xl font-bold py-6 '>Leatest News</h1>

            <div className='flex justify-between'>
                <div className="flex justify-center h-96 bg-amber-100 items-center md:w-3/5">
                    All News
                </div>
                <div className='md:w-2/5 h-96 bg-cyan-200'>
                    Sidebar
                </div>
            </div>

           </div>
        </div>
    );
};

export default newsPage;
