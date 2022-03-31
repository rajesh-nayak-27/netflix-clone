const API_KEY = "835469812e96871c37fe26b1a2022056"

const requests = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    action: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    comdey: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    horror: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    romace: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
}

export default requests;