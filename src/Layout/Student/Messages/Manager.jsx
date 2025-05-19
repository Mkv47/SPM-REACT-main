import React, { useState } from 'react';
import '../style.css';

const tabs = [
  {
    title: 'Incoming Messages',
    messages: [
      {
        header: 'This is a place654534   holder ',
        body: 'Bring your pencils and erasers...',
        file: '-',
        date: '2025-04-10',
      },
      {
        header: 'This is a pla5235236ce holder ',
        body: 'Deadline is May 30. Submit on LMS.',
        file: '-',
        date: '2025-05-01',
      }
    ]
  },
  // Outgoing section VVV
  {
    title: 'Outgoing Messages',
    messages: [
      {
        header: 'SE409 | 123125Final Exam Schedule',
        body: 'Exam is on June 12. Room 204.',
        file: '-',
        date: '2025-04-15',
      }
    ]
  }
];

const TaskManager = () => {
  const [currentButton, setCurrentButton] = useState(0);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const toggleOverlay = () => {
    setOverlayOpen(!overlayOpen);
  };
  return (
    <div>
      <div className="SSSelector">
        <div>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setCurrentButton(index)}
              className={`Announcements-button ${currentButton === index ? 'current' : ''}`}
            >
              {tab.title}
            </button>

          ))}
        </div>
        <button className="NewMessage" onClick={toggleOverlay}>New Message</button>
      </div>

      {overlayOpen && (
        <div className="overlay" onClick={toggleOverlay}>
          <div className="overlay-content" onClick={e => e.stopPropagation()}>
            <h2>New Message</h2>
              <form className="inputData" action="/submit" method="POST">
                <label htmlFor="Contact">Contact:</label>
                <select name="course" id="Contact">
                  <option value="">/</option>
                  <option value="SE408">SE408</option>
                  <option value="SE409">SE409</option>
                  <option value="MATH302">MATH302</option>
                </select>

                <label htmlFor="examTypeSelect">Select Exam Type:</label>
                <select name="examType" id="examTypeSelect">
                  <option value="">-- Choose exam type --</option>
                  <option value="midterm">Midterm</option>
                  <option value="final">Final</option>
                  <option value="resit">Resit</option>
                </select>

                <label htmlFor="subject">Student Name:</label>
                <input type="text" id="subject" className="subject" placeholder="Subject" />

                <label htmlFor="message">Student ID:</label>
                <input type="text" id="message" className="message" placeholder="Message" />

                <label htmlFor="uploadFile">Upload Document:</label>
                <input type="file" id="uploadFile" name="uploadFile" />
              </form>
            <button type='submit'>Submit</button>
          </div>
        </div>
      )}
      <div className="Announcements">
        {tabs.map((tab, index) => (
          <div key={index} className="menu" hidden={currentButton !== index}>
            {tab.messages.map((msg, msgIndex) => (
              <div className="message" key={msgIndex}>
                <h3>{msg.header}</h3>
                <p>{msg.body}</p>
                <div className="flie">{msg.file}</div>
                <hr />
                <p className="date">Date of addition : {msg.date}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;