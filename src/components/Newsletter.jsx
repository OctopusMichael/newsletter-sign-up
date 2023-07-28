import React, { useState } from "react";
import Card from "./Card";
import Thanks from "./Thanks";

const Newsletter = () => {
  const [suscrited, setSuscrited] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {suscrited ? (
        <Thanks
          email={email}
          suscrited={suscrited}
          setSuscrited={setSuscrited}
        />
      ) : (
        <Card
          email={email}
          setEmail={setEmail}
          uscrited={suscrited}
          setSuscrited={setSuscrited}
          setIsValid={setIsValid}
          isValid={isValid}
          error={error}
          setError={setError}
        />
      )}
    </>
  );
};

export default Newsletter;
