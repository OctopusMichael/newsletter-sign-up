import React from "react";
import desktop from "../images/illustration-sign-up-desktop.svg";
import mobile from "../images/illustration-sign-up-mobile.svg";
import succs from "../images/icon-list.svg";

const Card = ({
  email,
  setEmail,
  setSuscrited,
  isValid,
  setIsValid,
  error,
  setError,
}) => {
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (email !== "" && isValid === true) {
      setSuscrited(true);
    } else {
      setSuscrited(false);
      setError(true);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValid(validateEmail(inputValue));
  };

  return (
    <>
      <section className="section-card">
        <div className="card">
          <div className="card-body-left">
            <h1> Stay updated!</h1>
            <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
            <ul>
              <li>
                <img src={succs} alt="success" />
                <p> Product discovery and building what matters</p>
              </li>
              <li>
                <img src={succs} alt="success" />
                <p> Measuring to ensure updates are a success</p>
              </li>
              <li>
                <img src={succs} alt="success" />
                <p> And much more!</p>
              </li>
            </ul>

            <form onSubmit={handleSubmit}>
              <div className="label-form">
                <label htmlFor="email">Email address</label>
                {<p>{error ? "Valid email required" : ""}</p>}
              </div>
              <input
                type="text"
                placeholder="ash@loremcompany.com"
                value={email}
                onChange={handleChange}
                className={error ? "invalid" : "valid"}
              />
              <input type="submit" value="Suscribe to monthly newsletter" />
            </form>
          </div>
          <div className="card-body-right">
            <picture>
              <source srcSet={desktop} media="(min-width: 768px)" />
              <source srcSet={mobile} media="(min-width: 320px)" />
              <img
                className="content-img"
                src={mobile}
                alt="imagen principal"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
