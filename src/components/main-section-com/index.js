import React from "react";

/* Components */
import NoItem from "./components/NoItem";
import MainHeader from "./components/MainHeader";

/* Hook */
import Hook from "./hook";

const MainSection = () => {
  const { headerText, bodyText, tagName, cardData } = Hook();

  return (
    <section className="mainSection">
      <MainHeader title={headerText} description={bodyText} tagName={tagName} />
      <NoItem data={cardData.length} />

      <div className="container card-grid">{cardData}</div>
    </section>
  );
};

export default MainSection;
