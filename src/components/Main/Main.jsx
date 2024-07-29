import React, { useContext } from "react";
import {
  FaUser,
  FaCompass,
  FaLightbulb,
  FaCommentDots,
  FaCode,
  FaImage,
  FaMicrophone,
  FaPaperPlane,
} from "react-icons/fa";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setRecentPrompt
  } = useContext(Context);

  // Function to handle card click
  const handleCardClick = (text) => {
    setInput(text); // Update the input field with the card content
    setRecentPrompt(text); // Set the recent prompt to the card content
    // Optionally, you can trigger the onSent function if needed
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Lucatoney<span>Ai</span></p>
        <FaUser className="user" size={40} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("Suggest beautiful places to see on an upcoming road trip")}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <FaCompass size={35} className="card-icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Briefly summarize this concept: urban planning")}>
                <p>Briefly summarize this concept: urban planning</p>
                <FaLightbulb size={35} className="card-icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Brainstorm team bonding activities for our work retreat")}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <FaCommentDots size={35} className="card-icon" />
              </div>
              <div className="card" onClick={() => handleCardClick("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <FaCode size={35} className="card-icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <FaUser className="user" size={40} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <b className="icon">Ai</b>
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <FaImage size={24} className="input-icons"/>
              <FaMicrophone size={24} className="input-icons" />
              {input ? (
                <FaPaperPlane size={24} onClick={() => { setRecentPrompt(input); onSent(); }} className="input-icons"/>
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            LucatoneyAi may display inaccurate info, including about people, so
            double-check its responses. Your privacy and LucatoneyAi Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
