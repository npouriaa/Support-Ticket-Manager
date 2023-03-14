import React from "react";
import "./Modal.css";

const Modal = (props) => {
    let {email , title , subject , text} = props
  return (
    <section className="">
      <div className="modal-con">
        <div className="bg-black"></div>
        <div className="contnet">
          <div className="msg-content">
            <svg
            onClick={() => props.showModal(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <div className="co-con">
                <h4>ایمیل :</h4>
                <span className="gray">{email}</span>
            </div>
            <div className="co-con">
                <h4>عنوان پیام :</h4>
                <span className="gray">{title}</span>
            </div>
            <div className="co-con">
                <h4>موضوع پیام :</h4>
                <span className="gray">{subject}</span>
            </div>
            <div className="co-con text-con">
                <h4>متن پیام :</h4>
                <span className="gray">{text}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
