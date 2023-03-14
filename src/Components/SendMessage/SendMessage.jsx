import React from 'react'
import './SendMessage.css'

const SendMessage = (props) => {
  return (
    <div className='send-con'>
        <div className="send-con-header">
            <h2>ارسال تیکت جدید</h2>
        </div>
        <form action='' className="send-con-content">
            <div className="message-title msg-content-con">
                <h3>ایمیل :</h3>
                <input className='txtEmail' type="email" name="" id="" required/>
            </div>
            <div className="message-title msg-content-con">
                <h3>عنوان پیام :</h3>
                <input className='txtTitle' type="text" name="" id="" required/>
            </div>
            <div className="message-subject msg-content-con">
                <h3>موضوع پیام :</h3>
                <input className='txtSubject' type="text" name="" id="" required/>
            </div>
            <div id='message-text' className="msg-content-con">
                <h3>متن پیام :</h3>
                <textarea className='txtText' name="" id="" cols="30" rows="10" required></textarea>
            </div>
            <div className="msg-content-con">
                <button onClick={() => {
                    let form = document.querySelector('.send-con-content')
                    let email = document.querySelector('.txtEmail').value;
                    let title = document.querySelector('.txtTitle').value;
                    let subject = document.querySelector('.txtSubject').value;
                    let text = document.querySelector('.txtText').value;
                    if(email !== '' && title !== '' && subject !== '' && text !== ''){
                        props.addMessageHandler(email , title , subject , text)
                        form.reset()
                    }
                }} id='bold' type='submit'>ارسال تیکت</button>
            </div>
        </form>
    </div>
  )
}

export default SendMessage