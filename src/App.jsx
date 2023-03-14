import React, { useState } from "react";
import Sidemenu from "./Components/sideMenu/sideMenu";
import MainSection from "./Components/MainSection/MainSection";
import SendMessage from "./Components/SendMessage/SendMessage";
import MessageList from "./Components/MessageList/MessageList";
import Modal from "./Components/Modal/Modal";
import "./App.css";

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState([]);
  const [showContent, setShowContent] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const addMessageHandler = (email, title, subject, text) => {
    const fakeArray = [...messageList];
    const msgObj = {
      email: email,
      title: title,
      subject: subject,
      text: text,
    };
    fakeArray.push(msgObj); 
    setMessageList(fakeArray);
  };
  return (
    <div className="container">
      <Sidemenu badgeValue={messageList.length} showContent={setShowContent} />
      <MainSection>
        {showContent ? (
          <SendMessage addMessageHandler={addMessageHandler} />
        ) : (
          <MessageList
            selectedMessage={setSelectedMessage}
            showModal={setShowModal}
            array={messageList}
          />
        )}
      </MainSection>
      {showModal ? (
        <Modal
          email={selectedMessage[0].email}
          title={selectedMessage[0].title}
          subject={selectedMessage[0].subject}
          text={selectedMessage[0].text}
          showFullMsg={setSelectedMessage}
          showModal={setShowModal}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;