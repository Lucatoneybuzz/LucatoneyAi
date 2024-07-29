import React, { useContext, useState } from "react";
import {
  FaBars,
  FaPlus,
  FaQuestionCircle,
  FaHistory,
  FaCog,
  FaCommentDots,
} from "react-icons/fa";
import "./Sidebar.css";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`sidebar ${extended ? "extended" : ""}`}>
      <div className="top">
        <FaBars onClick={() => setExtended((prev) => !prev)} className="menu" />
        <div onClick={() => newChat()} className="new-chat">
          <FaPlus />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => (
              <div onClick={() => loadPrompt(item)} key={index} className="recent-entry">
                <FaCommentDots />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <FaQuestionCircle />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <FaHistory />
          {extended ? <p>Activities</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <FaCog />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
