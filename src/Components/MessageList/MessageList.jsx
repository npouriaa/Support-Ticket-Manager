import React from "react";
import "./MessageList.css";

const MessageList = (props) => {
  const showSelectedMessage = (email) => {
    props.array.map((i) => {
      if (i.email === email) {
        let selectedMsgArray = [];
        selectedMsgArray.push(i);
        props.selectedMessage(selectedMsgArray);
      }
    });
  };

  return (
    <div className="message-list-con">
      <div className="message-list-header">
        <h2>لیست تیکت های دریافتی</h2>
      </div>
      <div className="message-list-content">
        {props.array.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ایمیل</th>
                <th>عنوان پیام</th>
                <th>موضوع پیام</th>
                <th>متن پیام</th>
              </tr>
            </thead>
            <tbody>
              {props.array.map((i, index) => (
                <tr key={index}>
                  <td className="text-container" id="text-con-email">
                    <div className="">
                      <p>{i.email}</p>
                    </div>
                  </td>
                  <td className="text-container">
                    <div className="">
                      <p>{i.title}</p>
                    </div>
                  </td>
                  <td className="text-container">
                    <div className="">
                      <p>{i.subject}</p>
                    </div>
                  </td>
                  <td className="text-container" id="text-con-text">
                    <div className="">
                      <p>{i.text}</p>
                      <button
                        onClick={() => {
                          props.showModal(true);
                          showSelectedMessage(i.email);
                        }}
                      >
                        مشاهده کل پیام
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>هیچ تیکت دریافتی ندارید.........</p>
        )}
      </div>
    </div>
  );
};

export default MessageList;
