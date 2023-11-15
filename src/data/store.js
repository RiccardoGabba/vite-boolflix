import { reactive } from "vue";

export const store = reactive({ 
    apiUrl: 'https://developers.themoviedb.org/3',
    
    endPoint: {
        movie: "search/movie",
        series: "search/tv"
    },
   params: {
    api_key:'016f4da09c85a5a555acb1e5c16e81e1',
    query: "a"
   },
   

});