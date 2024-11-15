import JobOpenNewsCardButtonh from "./JobOpenNewsCardButton";
import cardimg from "../../img/work_img_h.png";
const JobOpenRateCardh = () => {
  const data = [
    {
      img: cardimg,
      title: "Freelance Writer",
      subTitle: "RateMyStation.com",
      location: "Remote Working",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: cardimg,
      title: "Freelance Writer",
      subTitle: "RateMyStation.com",
      location: "Remote Working",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: cardimg,
      title: "Freelance Writer",
      subTitle: "RateMyStation.com",
      location: "Remote Working",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: cardimg,
      title: "Freelance Writer",
      subTitle: "RateMyStation.com",
      location: "Remote Working",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: cardimg,
      title: "Freelance Writer",
      subTitle: "RateMyStation.com",
      location: "Remote Working",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: cardimg,
      title: "Freelance Writer",
      subTitle: "RateMyStation.com",
      location: "Remote Working",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
  ];
  return data.map((item) => (
    <div className="job--open--dash--news--h--card--parent--cont">
      <div className="job--open--dash--news--h--card">
        <div className="job--open--dash--news--h--card-upper">
          <div className="job--open--dash--news--h--card--head">
            <div className="job--open--dash--news--h--card--img">
              <img src={item.img} alt="" />
            </div>
            <div className="job--open--dash--news--h--card--title">
              <h1>{item.title}</h1>
              <p>{item.subTitle}</p>
            </div>
          </div>
          <div className="job--open--dash--news--h--card--job--info">
            <div className="job--open--dash--news--h--card--location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M3.46183 14.0418C3.24354 14.0465 3.04848 13.935 2.88129 13.7585C2.15213 12.9922 1.56695 12.1284 1.13502 11.1624C0.563774 9.88517 0.280471 8.54761 0.331558 7.14502C0.415156 4.84144 1.26507 2.85832 2.88129 1.20959C3.24354 0.838041 3.78693 0.828753 4.14454 1.16779C4.51144 1.51611 4.53002 2.0595 4.15847 2.44033C3.35036 3.27631 2.73267 4.22375 2.41221 5.34303C1.65054 7.981 2.19393 10.331 4.02379 12.3838C4.16776 12.5464 4.32103 12.7228 4.3814 12.9225C4.56253 13.4984 4.10739 14.0465 3.46183 14.0418ZM17.1579 3.51781C16.7399 2.64932 16.1873 1.87372 15.5045 1.19565C15.2212 0.91235 14.8265 0.84733 14.4828 1.01453C14.1298 1.18636 13.944 1.54398 13.9905 1.94803C14.023 2.21276 14.1902 2.39389 14.3667 2.57502C16.8793 5.21299 16.9861 9.365 14.6035 12.1237C14.4781 12.2677 14.3435 12.4024 14.2181 12.5464C13.879 12.9272 13.9115 13.5031 14.2924 13.8189C14.7243 14.1812 15.2073 14.1486 15.5556 13.7121C15.8018 13.4009 16.0479 13.0851 16.2708 12.7507C17.3762 11.0834 17.9707 9.25354 17.9985 7.43761C17.9846 5.90035 17.7106 4.6696 17.1579 3.51781ZM3.94948 8.45472C4.14919 9.54613 4.64613 10.4843 5.43102 11.2645C5.67717 11.5107 5.97905 11.5803 6.31344 11.4782C6.63854 11.376 6.84289 11.1484 6.9172 10.8187C6.99151 10.4796 6.8754 10.201 6.63389 9.95019C6.03013 9.3232 5.6911 8.56618 5.64466 7.69305C5.58428 6.63415 5.93725 5.72851 6.67105 4.96219C7.04259 4.57672 7.02866 4.02404 6.65712 3.67572C6.29486 3.33204 5.75147 3.35526 5.38457 3.73609C4.37676 4.78106 3.87517 6.03039 3.85659 7.62803C3.87053 7.8138 3.8891 8.13891 3.94948 8.45472ZM14.4038 6.29976C14.1902 5.29658 13.7025 4.4281 12.978 3.70358C12.7272 3.45279 12.4207 3.37848 12.0817 3.48995C11.7426 3.59676 11.5429 3.83827 11.4779 4.18659C11.4175 4.52563 11.5569 4.78571 11.7844 5.03186C12.5786 5.89106 12.8898 6.90352 12.7133 8.05531C12.6018 8.80769 12.2582 9.44396 11.7334 9.99199C11.3618 10.3821 11.3711 10.9301 11.7426 11.2785C12.1095 11.6221 12.6529 11.5989 13.0198 11.2181C14.023 10.1778 14.5199 8.92844 14.5525 7.30293C14.5199 7.08929 14.4874 6.68988 14.4038 6.29976ZM9.20685 5.70064C8.23618 5.69135 7.42343 6.49482 7.41878 7.47012C7.41414 8.45472 8.21761 9.26747 9.2022 9.26283C10.1822 9.26283 10.981 8.46401 10.981 7.48406C10.9856 6.50411 10.1961 5.70993 9.20685 5.70064Z"
                  fill="#194D79"
                />
              </svg>
              <p>{item.location}</p>
            </div>

            <div className="job--open--dash--news--h--card--money">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.34402 0.922668C8.69626 0.922668 9.0485 0.922668 9.40075 0.922668C9.44478 0.931475 9.4844 0.944684 9.52843 0.949087C9.95993 1.01513 10.4002 1.05476 10.8273 1.15163C14.0768 1.89574 16.6349 4.61241 17.1853 7.90147C17.2381 8.20968 17.269 8.51789 17.313 8.83051C17.313 9.18275 17.313 9.53499 17.313 9.88723C17.3042 9.91806 17.291 9.94888 17.2866 9.9797C17.2293 10.3716 17.1985 10.7678 17.1149 11.1509C16.0053 16.3817 10.2417 19.2745 5.38959 17.0466C1.80552 15.4042 -0.153826 11.6 0.594689 7.72975C1.25074 4.32181 3.99823 1.63156 7.41938 1.05036C7.7276 0.99752 8.03581 0.966699 8.34402 0.922668ZM10.1889 11.1993C10.1933 11.9082 9.61649 12.507 8.92082 12.5246C8.18551 12.5423 7.5867 11.9875 7.55147 11.2522C7.53826 10.8999 7.31811 10.671 7.0055 10.6798C6.70169 10.6886 6.48594 10.944 6.49475 11.2874C6.51676 12.2561 7.17281 13.1367 8.10185 13.4449C8.27357 13.5021 8.36163 13.5858 8.33962 13.7751C8.32641 13.8764 8.33521 13.9821 8.33962 14.0877C8.34402 14.4003 8.56857 14.6293 8.86358 14.6337C9.14977 14.6381 9.38313 14.4003 9.39634 14.0965C9.40075 13.9997 9.39634 13.8984 9.39634 13.8015C9.39634 13.5373 9.39634 13.5373 9.64291 13.4493C11.1928 12.8989 11.7432 11.0188 10.7261 9.73753C10.2593 9.14753 9.63411 8.85252 8.88119 8.83491C8.15909 8.8173 7.5867 8.28013 7.55147 7.58885C7.51625 6.86676 8.07543 6.23712 8.78432 6.2019C9.53284 6.16227 10.1537 6.72586 10.1845 7.47438C10.1977 7.82662 10.4178 8.05557 10.7305 8.04677C11.0343 8.03796 11.2632 7.78259 11.2324 7.43915C11.2104 7.18818 11.1708 6.9328 11.0871 6.69944C10.8229 5.98175 10.3122 5.50182 9.58567 5.25965C9.44918 5.21562 9.38754 5.14517 9.39634 4.99987C9.40515 4.87218 9.40075 4.7489 9.39634 4.62121C9.38754 4.32181 9.16298 4.09725 8.87238 4.09285C8.59499 4.08845 8.36163 4.313 8.34402 4.5992C8.33521 4.71808 8.33081 4.84136 8.34402 4.96025C8.36163 5.14077 8.27797 5.22443 8.11066 5.27726C6.91303 5.67354 6.23937 6.95041 6.58721 8.16125C6.87781 9.17394 7.78043 9.86962 8.84156 9.89164C9.60769 9.90485 10.1845 10.464 10.1889 11.1993Z"
                  fill="#194D79"
                />
              </svg>
              <p>{item.salary}</p>
            </div>

            <div className="job--open--dash--news--h--card--time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M0.312988 12.6598C0.312988 10.8098 0.312988 8.95988 0.312988 7.10557C0.330441 7.10994 0.34353 7.10994 0.360982 7.1143C2.94392 7.97382 5.52685 8.83335 8.10542 9.69723C8.48065 9.82376 8.84715 9.82813 9.22237 9.70596C11.766 8.85516 14.3141 8.00873 16.8577 7.16229C16.9101 7.14484 16.9668 7.12739 17.0235 7.10994C17.0279 7.14484 17.0323 7.16229 17.0323 7.17975C17.0323 8.94679 17.0366 10.7182 17.0235 12.4852C17.0235 12.7296 16.9581 12.987 16.8534 13.2095C16.4869 13.9774 15.8586 14.3395 15.0078 14.3352C10.7887 14.3308 6.57399 14.3352 2.3549 14.3352C2.28073 14.3352 2.2022 14.3352 2.12802 14.3308C1.32086 14.3003 0.596588 13.7243 0.382797 12.9434C0.360982 12.8517 0.339167 12.7557 0.312988 12.6598ZM0.312988 5.99735C0.326077 6.00608 0.34353 6.01481 0.356619 6.01917C3.05736 6.91796 5.7581 7.82112 8.4632 8.71118C8.59845 8.75481 8.76861 8.75045 8.90387 8.70682C11.5697 7.82548 14.2355 6.93541 16.9014 6.04971C17.0104 6.01481 17.0366 5.96245 17.0366 5.85337C17.0323 5.39961 17.0323 4.95022 17.0323 4.49646C17.0323 3.31407 16.2164 2.49381 15.034 2.49381C13.9083 2.49381 12.7826 2.49381 11.6526 2.49381C11.5915 2.49381 11.5261 2.49381 11.4563 2.49381C11.4563 2.26693 11.4606 2.07496 11.4563 1.87862C11.4519 1.76082 11.4519 1.63865 11.4301 1.52085C11.2905 0.853299 10.7494 0.408266 10.0514 0.403903C9.13074 0.395177 8.21014 0.39954 7.28953 0.403903C7.19354 0.403903 7.09319 0.412629 6.99721 0.430081C6.34711 0.569699 5.90644 1.09763 5.88899 1.76082C5.88026 1.99642 5.88899 2.23639 5.88899 2.48945C5.80173 2.48945 5.73628 2.48945 5.67083 2.48945C4.52771 2.48945 3.38459 2.48509 2.24146 2.48945C1.37758 2.50254 0.653307 3.03047 0.40025 3.842C0.365345 3.95108 0.339167 4.06015 0.312988 4.16923C0.312988 4.78006 0.312988 5.39089 0.312988 5.99735ZM7.28517 1.80881C8.20578 1.80881 9.12638 1.80881 10.0601 1.80881C10.0601 2.03133 10.0601 2.24948 10.0601 2.48509C9.13947 2.48509 8.22323 2.48509 7.28517 2.48509C7.28517 2.25384 7.28517 2.04005 7.28517 1.80881Z"
                  fill="#194D79"
                />
              </svg>
              <p>{item.timing}</p>
            </div>
          </div>
          <div className="job--open--dash--news--h--card--list">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle
                    cx="3.49565"
                    cy="3.54289"
                    r="2.99565"
                    stroke="black"
                  />
                </svg>
                {item.instruction1}
              </li>
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle
                    cx="3.49565"
                    cy="3.54289"
                    r="2.99565"
                    stroke="black"
                  />
                </svg>
                {item.instruction2}{" "}
              </li>
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle
                    cx="3.49565"
                    cy="3.54289"
                    r="2.99565"
                    stroke="black"
                  />
                </svg>
                {item.instruction3}
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-12 d-flex justify-content-between faq--work--card--bottom--container">
          <div className="d-flex faq--work--card--bottom">
            <div className="faq--work--bottom--img--h">
              <img src={require("../../img/tick_h.png")} alt="" />
            </div>
            <p>{item.hiringStatus}</p>
          </div>
          <div className="d-flex faq--work--card--bottom faq--work--card--bottom--alt">
            <div className="faq--work--bottom--img--h">
              <img src={require("../../img/time_h.png")} alt="" />
            </div>
            <p>{item.updateTime}</p>
          </div>
        </div>
      </div>
      <div className="job--open--dash--rate--h--card--lower">
        <a href="#">Preview</a>
        <a href="#">Edit</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="26"
          viewBox="0 0 7 26"
          fill="none"
        >
          <circle cx="3.42105" cy="3.42105" r="3.42105" fill="#828282" />
          <circle cx="3.42105" cy="13" r="3.42105" fill="#828282" />
          <circle cx="3.42105" cy="22.5789" r="3.42105" fill="#828282" />
        </svg>
      </div>
    </div>
  ));
};

export default JobOpenRateCardh;
