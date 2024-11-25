import Card1 from "../Card/Card1";
import Card2 from "../Card/Card2";
import Card3 from "../Card/Card3";
import Card4 from "../Card/Card4";
import Card5 from "../Card/Card5";
import Card6 from "../Card/Card6";


const Masonry = () => {


  const cards = [
    { Component: Card1, props: { title: "Card 1", description: "Description 1", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" } },
    { Component: Card2, props: { title: "Card 2", description: "Description 2", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" } },
    { Component: Card3, props: { title: "Card 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum voluptate natus accusantium ipsum error alias, commodi nulla labore sequi, amet aliquam sed similique so" } },
    { Component: Card4, props: { title: "Card 4", description: "Description 4", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" } },
    { Component: Card5, props: { title: "Card 5", description: "Description 5" } },
    { Component: Card6, props: { title: "Card 6", description: "Description 6", highlight: true } },
  ];

  // Divide cards into two chunks for two-column layout
  const chunkedCards = [
    cards.slice(0, 3), // First column: Cards 1, 2, 3
    cards.slice(3, 6), // Second column: Cards 4, 5, 6
  ];

  return (
    <div className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-4">
      {chunkedCards.map((group, index) => (
        <div key={index} className="grid gap-4">
          {group.map(({ Component, props }, idx) => (
            <Component key={idx} {...props} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
