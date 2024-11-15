import kabc from "../../img/kabc.png";

const DashStationRateCardh = () => {
  const data = [
    {
      id: "1",
      title: "KABC",
      subTitle: "TV News | Los Angeles, CA | DMA: 2",
      score: "4.8",
      verifiedRating: "165",
      rating: "534",
    },
    {
      id: "2",
      title: "KABC",
      subTitle: "TV News | Los Angeles, CA | DMA: 2",
      score: "4.8",
      verifiedRating: "165",
      rating: "534",
    },
    {
      id: "3",
      title: "KABC",
      subTitle: "TV News | Los Angeles, CA | DMA: 2",
      score: "4.8",
      verifiedRating: "165",
      rating: "534",
    },
    {
      id: "4",
      title: "KABC",
      subTitle: "TV News | Los Angeles, CA | DMA: 2",
      score: "4.8",
      verifiedRating: "165",
      rating: "534",
    },
  ];

  return data.map((items, index) => (
    <div id={items.id} className="station--rate--card--h">
      <div className="job--open--dash--news--h--card--head">
        <div className="job--open--dash--news--h--card--img">
          <img src={kabc} alt="" />
        </div>
        <div className="job--open--dash--news--h--card--title">
          <div className="job--open--dash--news--h--card--heading">
            <h1>{items.title}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M13.459 17.2472C13.2697 17.2235 13.0153 17.2058 12.7728 17.1584C12.6544 17.1347 12.6071 17.1643 12.542 17.2591C11.7493 18.3956 10.6607 18.958 9.27637 18.9047C8.06358 18.8574 7.10518 18.3068 6.40117 17.3182C6.30651 17.188 6.23552 17.1407 6.06987 17.1703C3.95784 17.5373 2.00554 16.1343 1.72157 14.0091C1.66833 13.6125 1.72749 13.1981 1.75707 12.7956C1.76299 12.6772 1.76299 12.618 1.6565 12.5469C-0.556106 11.0255 -0.55019 7.91176 1.66241 6.3667C1.75707 6.30158 1.77482 6.2483 1.75707 6.13583C1.37253 3.98104 2.70955 2.07488 4.86891 1.73153C5.27712 1.66641 5.70307 1.73745 6.12311 1.76113C6.2296 1.76705 6.28876 1.77297 6.35976 1.67233C7.92159 -0.553494 10.992 -0.559414 12.5479 1.66641C12.613 1.76113 12.6722 1.77297 12.7846 1.75521C14.938 1.37043 16.8371 2.70829 17.1802 4.87492C17.2453 5.27747 17.1802 5.69777 17.1506 6.10623C17.1388 6.23055 17.1506 6.29566 17.263 6.37262C19.4579 7.87032 19.452 11.0433 17.2571 12.541C17.1565 12.612 17.1329 12.6653 17.1565 12.7896C17.5411 14.9385 16.1922 16.8387 14.0329 17.1939C13.8554 17.2295 13.6838 17.2295 13.459 17.2472ZM8.56644 10.0488C8.53686 10.0547 8.50137 10.0606 8.47179 10.0606C8.43038 9.98959 8.39488 9.91263 8.34163 9.85344C7.98667 9.49233 7.63171 9.12531 7.259 8.77604C6.87445 8.41494 6.3006 8.43269 5.93972 8.7938C5.57884 9.1549 5.56109 9.73504 5.92789 10.108C6.56682 10.7651 7.21167 11.4103 7.86835 12.0497C8.24106 12.4108 8.79717 12.4167 9.16988 12.0497C10.4418 10.7947 11.702 9.52785 12.9562 8.26102C13.2105 8.00647 13.2815 7.68089 13.181 7.33754C12.9739 6.63309 12.1279 6.43182 11.5836 6.9646C10.6193 7.91768 9.66091 8.8826 8.70251 9.84752C8.65518 9.90671 8.61377 9.98367 8.56644 10.0488Z"
                fill="#89C400"
              />
            </svg>
          </div>
          <p>{items.subTitle}</p>
        </div>
      </div>
      <div className="station--rating--score--cont">
        <div className="station--score--h">
          <h1>
            {items.score} <span> / 5.0</span>
          </h1>
          <p>Scores</p>
        </div>
        <div className="station--verified--rating--h">
          <h1>{items.verifiedRating}</h1>
          <p>Verified Ratings</p>
        </div>
        <div className="station--rating--h">
          <h1>{items.rating}</h1>
          <p>Ratings</p>
        </div>
      </div>

      <div className="station--rating--card--btn--h">
        <a href="#">Manage ratings</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="27"
          viewBox="0 0 7 27"
          fill="none"
        >
          <circle cx="3.4213" cy="3.84195" r="3.42105" fill="#828282" />
          <circle cx="3.42105" cy="13.4211" r="3.42105" fill="#828282" />
          <circle cx="3.42105" cy="23.0002" r="3.42105" fill="#828282" />
        </svg>
      </div>
    </div>
  ));
};

export default DashStationRateCardh;
