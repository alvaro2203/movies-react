const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
            headers: {
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTQ0NmY3MjE3M2Q3MzExMzlkZTU3NzQ2YjIwYWRmMyIsInN1YiI6IjYxMWY3NGQwZDk2YzNjMDA3ZGE1ODkzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-VohSGO-5vv-bJ_1W1XsoUh1spbr9lifUXexOHj94g",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((result) => result.json());
}