import React, { useEffect, useState } from "react";
import LiveChatCard from "./LiveChatCard";
import { useDispatch, useSelector } from "react-redux";
import { chatMessages } from "../utils/livechatSlice";
import { chatMessageList, nameList } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.livechat.messages);
  const [myChat, setMyChat] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = nameList[Math.floor(Math.random() * nameList.length)];
      const randomMessage =
        chatMessageList[Math.floor(Math.random() * chatMessageList.length)];
      dispatch(
        chatMessages({
          name: randomName,
          message: randomMessage,
        })
      );
    }, 500);

    return () => {
        clearInterval(interval);
      };
    
  }, []);

  const handleMyChat = () => {
    dispatch(
      chatMessages({
        name: "Shobhit Rana",
        message: myChat,
      })
    );
    setMyChat("");
  };

  return (
    <div className="mb-10">
      <h5 className="border border-gray-300 w-full rounded-t-lg p-2 px-3">
        Live Chat
      </h5>
      <div className="border border-gray-300 w-full h-[320px] p-2 overflow-y-auto flex flex-col-reverse">
        {messages.map((msg, index) => (
          <LiveChatCard name={msg.name} message={msg.message} />
        ))}
      </div>
      <div className="border border-gray-300 rounded-b-lg p-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="border border-gray-400 p-1 px-2 w-56 mr-2 rounded-lg"
            value={myChat}
            onChange={(e) => setMyChat(e.target.value)}
          />
          <button
            className="bg-gray-100 rounded-lg p-1 px-3 hover:bg-gray-200"
            onClick={() => handleMyChat()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
