import React from "react";
import check from "../images/icon-list.svg";

const Thanks = ({ suscrited, setSuscrited, email }) => {
  const handleThanks = () => {
    setSuscrited(!suscrited);
  };

  return (
    <div className="thanks">
      <img src={check} alt="check" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span>{email}</span> Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button onClick={handleThanks}>Dismiss message</button>
    </div>
  );
};

export default Thanks;
