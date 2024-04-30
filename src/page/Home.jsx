import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import ContryCard from "../components/ContryCard";
import { Typewriter } from 'react-simple-typewriter'
import UserContext from "../Context/Usercontext";

function Home() {

  const [data, setData] = useState([])
  
  const { user, setuser } = useContext(UserContext)
  useEffect(() => {
    setData(localStorage.getItem('dataKey'))
    if (data) {
      setuser(true)      
    } else {
      setuser(false)
      
    }
  }, [data]);
  return (
    <div>

      <div className="slider ">
        <div className="carousel w-full lg:h-[500px] md:h-[400px] h-[250px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.freepik.com/free-photo/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand_335224-1063.jpg?t=st=1714135403~exp=1714139003~hmac=12f79d97f35b66db6414d4cd34016666972ba81d5aca005a65d736a36269d6c7&w=740"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://th.bing.com/th/id/OIP.8lo-MKLFrVf2eGI-djJ93QHaFj?rs=1&pid=ImgDetMain"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://th.bing.com/th/id/R.b6bdb8803ea748b8881f6bdb0f067e92?rik=22EGs7axys1xXA&pid=ImgRaw&r=0"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="flex justify-center flex-wrap w-full">
        <div className='flex justify-center text-2xl font-bold text-green-600 my-4 '>
          <p >Tourist-Sport</p>
        </div>        
        <HomeCard />
      </div>
      <p className="text-2xl text-center font-bold text-green-600 my-6">Contry Section</p>
      <div className="flex justify-center flex-wrap w-full gap-2">

        <ContryCard />
      </div>

      <div className="px-4 py-4">
        <div className="card w-full bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">Terms & Condition</h2>
            <p>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS WEBSITE. IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, YOU MUST DISCONTINUE USING THIS WEBSITE.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary"><Link to='/term'>Read Now</Link></button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="flex justify-center items-center w-full py-6 text-3xl font-bold">
          <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
            Some Common {' '}
            <span style={{ color: 'green', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Quitione', 'Doute', 'Importent Quition', 'Thing!']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How to we provide our condition and term's..?
          </div>
          <div className="collapse-content">
            <p>Plz go to Our Term and Condion page There are the best policies for you.</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            is we tok the bigger amount of mouny..?
          </div>
          <div className="collapse-content">
            <p>you can chack any where and at the end you will see the low amount in our site</p>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
  );
}

export default Home;
