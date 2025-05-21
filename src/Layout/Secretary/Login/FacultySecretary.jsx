import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultySecretary.css';
const FacultySecretary = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Home=Secretary');
  };

  return (
    <section className="section">
      <div className="container">
        <div className="topContainer">
          <img src="/images/283d341b4e9d62729749d98fcc1e4640.png" alt="" />
          <h1 className="topTitle">Resit Exam Entrance</h1>
        </div>
        <div className="bottom-Container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="email" className="label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Academic Email Address"
                required
                className="input"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password" className="label">Email Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Academic Email password"
                required
                className="input"
              />
            </div>
            <div className="formGroup">
              <input
                style={{ position: 'relative', left: '-48%' }}
                type="checkbox"
                id="terms"
                name="terms"
                required
              />
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
            <button type="submit" className="button">Submit</button>
            <div className="lastTwo">
              <a href="resitexam.html">Not a Faculty Secretary</a>
              <a href="https://teksifre.uskudar.edu.tr/">I forgot my Password</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FacultySecretary;
