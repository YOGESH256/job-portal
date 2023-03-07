import React, { useEffect, useState } from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import axios from "axios";

const CoursesCard = () => {
  const [coursesCard, setCourseCard] = useState([]);
  const fetchPlayListbasedOnRecommendation = async () => {
    const response = await axios.post(`http://localhost:3002/getRecommend`, {
      token: localStorage.getItem("token"),
    });

    setCourseCard(response.data);
  };

  const RedirectVideo = (id) => {
    window.location.href = `http://localhost:3002/courses/${id}`;
  };

  useEffect(() => {
    fetchPlayListbasedOnRecommendation();
  }, []);
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={""} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.playListName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  {/* <div className="details">
                    {val.courTeacher.map((details) => (
                      <>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.playListName}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div> */}
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button
                onClick={() => RedirectVideo(val._id)}
                className="outline-btn"
              >
                ENROLL NOW !
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
