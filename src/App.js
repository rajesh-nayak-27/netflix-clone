import "./App.css";
import Rows from "./Rows";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.netflixOriginals}
        isLargeRow={true}
      />
      <Rows title="Trending" fetchUrl={requests.trending} />
      <Rows title="Top Rated" fetchUrl={requests.topRated} />
      <Rows title="Action" fetchUrl={requests.action} />
      <Rows title="Comedy" fetchUrl={requests.comdey} />
      <Rows title="Horror" fetchUrl={requests.horror} />
      <Rows title="Romace" fetchUrl={requests.romace} />
      <Rows title="Documentaries" fetchUrl={requests.documentaries} />
    </div>
  );
}

export default App;
