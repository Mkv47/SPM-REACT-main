import React from 'react';
import '../Login/instructor.css'; // Optional for your styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
const ResitExamEntranceInstructor = () => {
    const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form logic here (e.g., send to backend, validation, etc.)
      navigate('/instructor');
  };

  return (
    <section className='ResitExamInstructor'>
      <div className="container">
        <div className="top-container">
          <img
            src="images/283d341b4e9d62729749d98fcc1e4640.png"
            alt="Logo"
          />
          <h1>Resit Exam Entrance</h1>
        </div>
        <div className="bottom-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Academic Email Address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Email Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Academic Email password"
                required
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms" className="terms">
                I have read and approved{' '}
                <a
                  href="https://uskudar.edu.tr/tr/kisisel-verilerin-korunmasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the Information and Disclosure Text
                </a>{' '}
                under the Law on Protection of Personal Data. (*)
              </label>
            </div>
            <div className="buttons">
              <button className="button" type="submit">
                Login
              </button>
              <a
                className="button edevlet"
                href="https://giris.turkiye.gov.tr/Giris/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login with e-Devlet
              </a>
            </div>
            <div className="lastwo">
              <a href="resitexam.html">Not an Instructor</a>
              <a href="https://teksifre.uskudar.edu.tr/">
                I forgot my Password
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResitExamEntranceInstructor;
