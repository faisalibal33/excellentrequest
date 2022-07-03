import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import "./home.css";

const Home = () => {
  const { data, loading} = useFetch("http://localhost:8800/api/request");
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h2>Progress Work</h2>
        <div className="homework">
          {loading ? (
            "loading"
            ) : (
              <>
                  {data.sort((a, b) => b.createdAt > a.createdAt? 1 : -1).map((item) => (
                    <SearchItem item={item} key={item._id} />
                    ))}
                </>
              )}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
