import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

import "./UploadVideo.css";
import Dropdown from "react-dropdown";
import axios from "axios";

const UploadVideo = () => {
  var [data, setData] = useState([]);

  useEffect(async () => {
    let result = await axios
      .post("http://localhost:3002/getVideos")
      .catch((e) => console.log(e));

    console.log(result, "result");
    setData(result.data);
  }, []);
  console.log(data);
  const options = [];

  for (let i = 0; i < data.length; i++) {
    let temp = {};
    temp["label"] = data[i].description;
    temp["id"] = data[i]._id;

    options.push(temp);
    console.log(options);
  }

  const [video, setVideo] = React.useState("fruit");

  const handleChange = (event) => {
    // console.log(event);
    setVideo(event.value);
    console.log(event.value);
  };

  const onSubmit = (e) => {
    console.log(video);
  };

  return (
    <>
      <div className="container">
        <section className="heading">
          <h1>
            <FaUser /> Register
          </h1>
          <p>Please Upload Videos</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                // value={name}
                // onChange={onChange}
                placeholder="Enter PlayList Name"
                required
              />
            </div>
            <div className="form-group">
              <Dropdown
                label="What do we eat?"
                options={options}
                onChange={handleChange}
              />
              ;
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
export default UploadVideo;
