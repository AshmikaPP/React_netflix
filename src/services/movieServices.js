const key = import.meta.env.VITE_TMDB_KEY;
console.log("the data in the env",import.meta.env);

const baseUrl = "https://api.themoviedb.org/3";

const endpoints={
    popular:`${baseUrl}/movie/popular?api_key=${key}`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
    trending:`${baseUrl}/movie/popular?api_key=${key}&language=en-US$page=2`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=${key}`,
};

export function createImageUrl(filename,size){
   return `https://image.tmdb.org/t/p/${size}/${filename}`
}
export default endpoints;