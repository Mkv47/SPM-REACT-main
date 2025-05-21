import React, { useState } from 'react';
import '../style.css';

const tabs = [
  {
    title: 'Incoming Messages',
    messages: [
      {
        id: 1,
        header: 'This is a place654534 holder ',
        body: 'Bring your pencils and erasers...',
        file: '-',
        date: '2025-04-10',
      },
      {
        id: 2,
        header: 'This is a pla5235236ce holder ',
        body: 'Deadline is May 30. Submit on LMS.',
        file: '-',
        date: '2025-05-01',
      }
    ]
  },
  {
    title: 'Outgoing Messages',
    messages: [
      {
        id: 3,
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
  const [hiddenItems, setHiddenItems] = useState(() => {
    const initial = {};
    tabs.forEach(tab => {
      tab.messages.forEach(msg => {
        initial[msg.id] = true;
      });
    });
    return initial;
  });

  const toggleReply = (id) => {
    setHiddenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
        <button className="NewMessage" onClick={toggleOverlay}>New Announcement</button>
      </div>

      {overlayOpen && (
        <div className="overlay" onClick={toggleOverlay}>
          <div className="overlay-content" onClick={e => e.stopPropagation()}>
            <h2>New Message</h2>
            <form className="inputData" action="/submit" method="POST">
              <label htmlFor="Contact">Contact:</label>
              <select name="course" id="Contact" defaultValue="">
                <option value="" disabled>Select your Contact</option>
                <option value="SE408">SE408</option>
                <option value="SE409">SE409</option>
                <option value="MATH302">MATH302</option>
              </select>

              <label htmlFor="course">For which course you will send a message:</label>
              <select name="course" id="course" defaultValue="">
                <option value="" disabled>Select your Course</option>
                <option value="midterm">Midterm</option>
                <option value="final">Final</option>
                <option value="resit">Resit</option>
              </select>

              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" className="subject" placeholder="Subject" />

              <label htmlFor="message">Message:</label>
              <textarea id="message" className="message" placeholder="Message" />

              <label htmlFor="uploadFile">Upload Document:</label>
              <input type="file" id="uploadFile" name="uploadFile" />
            </form>
            <button type='submit' className="submitButton">Submit</button>
          </div>
        </div>
      )}

      <div className="Announcements">
        {tabs.map((tab, index) => (
          <div key={index} className="menu" hidden={currentButton !== index}>
            {tab.messages.map((msg) => (
              <div className="message" key={msg.id}>
                <h3>{msg.header}</h3>
                <p>{msg.body}</p>
                <button
                  className="reply"
                  onClick={() => toggleReply(msg.id)}
                >
                  {hiddenItems[msg.id] ? 'Reply' : 'Cancel'}
                </button>

                {!hiddenItems[msg.id] && (
                  <form className="dropform">
                    <div>
                      <label htmlFor={`dropform-text-${msg.id}`}>Message:</label>
                      <textarea id={`dropform-text-${msg.id}`} />
                    </div>
                    <div>
                      <label htmlFor={`dropform-file-${msg.id}`}>Upload File</label>
                      <input type="file" id={`dropform-file-${msg.id}`} />
                    </div>
                    <button
                      type="submit"
                      className="reply"
                      onClick={() => toggleReply(msg.id)}
                    >
                    {hiddenItems[msg.id] ? 'Reply' : 'Send'}
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;