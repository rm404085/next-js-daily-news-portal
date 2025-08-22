const fetchNews = async(search: string = "", category: string = "") => {
   try {

    const response = await fetch(`https://news-api-next-js-three.vercel.app/api/news?search=${search}&&category=${category}`);

    if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = response.json();

        return data;
          

   } catch (error) {
    console.error("Error Fetching New Data", error);
    return [];
   }
}
export default fetchNews;