import React from "react";
import Card from "./Card";

const Home = () => {

  const cardsData = Array.from({ length: 20 }, (_, index) => ({
    image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    title:" Beatifull Pic",
    description: "Written works, such as lectures, articles, books, and musical compositions",
    buttonText: "Learn More",
  }));

  return (
    <div className="container my-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
