import placeholder from "../utils/placeholder2.jpg";

export function getMovieImg(path, width) {
    return  path 
        ? `https://image.tmdb.org/t/p/w${width}${path}`
        : placeholder;
}