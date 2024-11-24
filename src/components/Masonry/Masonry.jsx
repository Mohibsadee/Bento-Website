import Card from "../Card/Card";
  const Masonry = () => {
    const cards = [
      { title: "Card 1", description: "Description 1", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
      { title: "Card 2", description: "Description 2", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" },
      { title: "Card 3", description: "Description 3", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" },
      { title: "Card 4", description: "Description 4", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
      { title: "Card 5", description: "Description 5", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
      { title: "Card 6", description: "Description 6", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" },
      { title: "Card 7", description: "Description 7", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" },
      { title: "Card 8", description: "Description 8", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
      { title: "Card 9", description: "Description 9", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" },
      { title: "Card 10", description: "Description 10", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
      { title: "Card 11", description: "Description 11", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
      { title: "Card 12", description: "Description 12", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" }
    ];
  
    const chunkedCards = [
      cards.slice(0, 3),
      cards.slice(3, 6),
      cards.slice(6, 9),
      cards.slice(9, 12)
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {chunkedCards.map((group, index) => (
          <div key={index} className="grid gap-4">
            {group.map((card, idx) => (
              <Card
                key={idx}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Masonry;
  