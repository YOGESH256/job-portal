import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

import "./UploadVideo.css";
import Dropdown from "react-dropdown";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

  const [video, setVideo] = React.useState([]);
  const [playListName, setPlayListName] = useState("");
  const [skill, setSkills] = useState("");
  

  const handleChange = (event) => {
    // console.log(event);
    let ids = options.filter((a) => a.label === event.value);
    setVideo([...video , ids[0]?.id]);
    console.log(event.value);
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(video, playListName, skill, "dlsKJ");
    let skills = skill.split(",")
    
    const resp = await axios.post('http://localhost:3002/createPlayList', { videos: video, playListName, skills });
    setVideo([]);
    window.location.assign("http://localhost:3002/");
    
    
   

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
                value={skill}
                onChange={(e) => setSkills(e.target.value) }
                placeholder="Enter PlayList Name"
                required
              />
            </div>
            <div className="form-group">
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={playListName}
                onChange={(e) => setPlayListName(e.target.value) }
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
            <button type = "submit">  Submit </button>
          </form>
        </section>
      </div>
    </>
  );
};
export default UploadVideo;
