import React, { useRef, useState, useEffect} from "react";
import { Toaster, toast } from 'react-hot-toast';
import "./Body.css";
import axios from "axios";

export default function BodyTweets() {
  const hashtag = useRef();
  const [result, setResult] = useState([])
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue('')
  },[result]);

  const handleClear = (e) => {
    setInputValue('');
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  // CALL TO Node.JS
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = hashtag.current?.value;
    axios
      .post("http://localhost:1010/twitter/", {
        method: "POST",
        body: JSON.stringify({ hashtag: query })
      })
      .then(res => {
        if(res.data==='Request failed with status code 500'){
          toast.error("Oops, something went wrong!", {duration: 1500});
          console.log(res.data)
        } else{
            toast.success("Success!", {duration: 1500});
            console.log(res.data)
            setResult(res.data)
          }
        }
      )
      .catch(err => {
          toast.error("Oops, something went wrong!", {duration: 1500});
          console.log(err)
        }
      )
  }

  return (
    <>
      <div className="body-container">
      <Toaster/>
        <div className="body-icons twitter">
          <img src="twitter.png" alt="twitter_logo" width="135" height="135" />
        </div>
        <div className="input-box">
          <form onSubmit={handleSubmit}>
            <input
              className="input-box-tweet"
              type="text"
              size={80}
              placeholder="Enter Hashtag"
              ref={hashtag}
              value={inputValue}
              onChange={handleChange}
            />
            <i className="fa-solid fa-hashtag fa-lg"></i>
            <i onClick={handleClear} class="fa-solid fa-xmark"></i>
            <br />
            <button type="submit">Check Sentiment</button>
          </form>
        </div>
      </div>
    </>
  );
}
