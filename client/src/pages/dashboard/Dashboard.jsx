import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const { data, loading, error, reFetch } = useFetch("http://localhost:8800/api/request");
  const [modalOpen, setModalOpen] = useState(false);
  const [idfetch, setIdfetch] = useState()

  const handleClick = () => {
    setModalOpen(true);
    console.log(idfetch)
    
  }
  const handleProgress = () => {
        axios.put(`http://localhost:8800/api/request/${idfetch}`, { progress: 'PROGRESS' });
        reFetch()
        setModalOpen(false)
  }
  return (
    <>
    {modalOpen && <div className="modalBackground">
    <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Execute this request</h1>
        </div>
        
        <div className="footer">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button id="execute" onClick={handleProgress}>Execute</button>
        </div>
      </div>
    </div>}

    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="request"/>
          <Widget type="open" className="openwork" />
          <Widget type="close" />
          <Widget type="progress" />
        </div>
        <div className="charts">
          <Featured />
          <Swiper className="swiper"
      // install Swiper modules
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {loading ? (
              "loading"
            ) : (
              <>
                {data.sort((a, b) => b.createdAt > a.createdAt? 1 : -1)
                  .filter(item=>item.progress.toLowerCase().includes("open"))
                  .map((item) => (
                  <SwiperSlide key={item._id} className="slide">
                    <SearchItem item={item} key={item._id} handleClick={() => {handleClick(); setIdfetch(item._id)}}/>
                  </SwiperSlide>
                ))}
              </>
            )}
      ...
    </Swiper>
        </div>
        <div className="listContainer">
          <div className="listTitle">Work To DO</div>
          <Table />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
