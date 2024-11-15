import ChevronImage from "../../img/chevron_h.png";
const Related = () => {
  const items = [
    {
      id: 1,
      text: "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      url: "#",
      imgSrc: ChevronImage,
    },
    {
      id: 2,
      text: "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      url: "#",
      imgSrc: ChevronImage,
    },
    {
      id: 3,
      text: "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      url: "#",
      imgSrc: ChevronImage,
    },
    {
      id: 4,
      text: "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      url: "#",
      imgSrc: ChevronImage,
    },
  ];

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center faq--detail--card--container"
        >
          <div className="faq--detail--related--link--h">
            <a href={item.url}>{item.text}</a>
          </div>
          <div className="faq--detail--related--img--h">
            <img src={item.imgSrc} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Related;
