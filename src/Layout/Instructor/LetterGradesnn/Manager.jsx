import React, { useState } from 'react';
import '../style.css';

const tabs = [
  {
    title: 'SE408',
    messages: [
      {
        header: 'SE408 | Midterm Exam Info',
        body: 'Bring your pencils and erasers...',
        file: '-',
        date: '2025-04-10',
      },
      {
        header: 'SE408 | Project Submission',
        body: 'Deadline is May 30. Submit on LMS.',
        file: '-',
        date: '2025-05-01',
      }
    ]
  },
  {
    title: 'SE409',
    messages: [
      {
        header: 'SE409 | Final Exam Schedule',
        body: 'Exam is on June 12. Room 204.',
        file: '-',
        date: '2025-04-15',
      }
    ]
  }
];

const TaskManager = () => {
  const [currentButton, setCurrentButton] = useState(0);

  return (
    <div>
      <div className="sideSelector">
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