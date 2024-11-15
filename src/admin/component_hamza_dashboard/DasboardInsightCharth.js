import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, defaults, elements, registerables, Ticks } from "chart.js";
import { callback } from "chart.js/helpers";

Chart.register(...registerables);

const DashboardInsightChart = () => {
  const [cardData, setCardData] = useState({
    visitors: 1545,
    visitorsChange: 0,
    visits: 3354,
    visitsChange: 0,
  });

  const allData = [
    {
      date: "June 12",
      visitors: 1545,
      visits: 3354,
    },
    {
      date: "June 13",
      visitors: 1024,
      visits: 3897,
    },
    {
      date: "June 14",
      visitors: 1234,
      visits: 5436,
    },
    {
      date: "June 15",
      visitors: 2332,
      visits: 3005,
    },
    {
      date: "June 16",

      visitors: 1324,
      visits: 2098,
    },
    {
      date: "June 17",
      visitors: 1132,
      visits: 2987,
    },
    {
      date: "June 18",
      visitors: 1255,
      visits: 3976,
    },
  ];

  const data = {
    labels: allData.map((d) => d.date),
    datasets: [
      {
        label: "",
        data: allData.map((d) => d.visitors),
        fill: false,
        borderColor: "#89C400",
        borderWidth: 1,
        // tension: 1,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
      },
    ],
  };

  const calculateChange = (current, previous) => {
    return (((current - previous) / previous) * 100).toFixed(2);
  };

  const options = {
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const element = elements[0];
        const dataIndex = element.index;

        const previousIndex = dataIndex > 0 ? dataIndex - 1 : 0;

        const visitorsChange = calculateChange(
          allData[dataIndex].visitors,
          allData[previousIndex].visitors
        );
        const visitsChange = calculateChange(
          allData[dataIndex].visits,
          allData[previousIndex].visits
        );

        setCardData({
          visitors: allData[dataIndex].visitors,
          visitorsChange,
          visits: allData[dataIndex].visits,
          visitsChange,
        });
      }
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        padding: {
          left: 10,
          right: 30,
          top: 10,
          bottom: 10,
        },
        borderWidth: 1,
        borderColor: "#00000061",
        displayColors: false,
      },
    },
    hover: {
      mode: "nearest",
      intersect: false,
    },
    scales: {
      x: {
        beginsAtZero: true,
        border: {
          dash: [5, 5],
        },
        ticks: {
          color: "black",
          fontSize: "32px",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        display: false,
        // border: {
        //   display: false,
        // },
        // grid: {
        //   display: false,
        // },
      },
    },
  };

  return (
    <div className="chart-container" style={{ marginBottom: "28px" }}>
      <div className="chart-title-cont-h">
        <div className="chart-title-heading-h">
          <h1>Page Visit</h1>
        </div>
      </div>
      <div className="stats-container">
        <div className="stat-card stat-card-1">
          <div className="stat-card-left">
            <h1>{cardData.visitors}</h1>
            <p>Visitors</p>
          </div>
          <div className="stat-card-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.752084 6.0251C0.336687 5.6097 0.336687 4.93621 0.752084 4.52081L4.71318 0.559717C5.12858 0.14432 5.80207 0.14432 6.21746 0.559717L10.1786 4.52081C10.594 4.93621 10.594 5.6097 10.1786 6.0251C9.76316 6.44049 9.08967 6.44049 8.67427 6.0251L5.46532 2.81614L2.25637 6.0251C1.84097 6.44049 1.16748 6.44049 0.752084 6.0251Z"
                fill="#89C400"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.752084 12.5239C0.336687 12.1085 0.336687 11.4351 0.752084 11.0197L4.71318 7.05856C5.12858 6.64316 5.80207 6.64316 6.21746 7.05856L10.1786 11.0197C10.594 11.4351 10.594 12.1085 10.1786 12.5239C9.76316 12.9393 9.08967 12.9393 8.67427 12.5239L5.46532 9.31499L2.25637 12.5239C1.84097 12.9393 1.16748 12.9393 0.752084 12.5239Z"
                fill="#89C400"
              />
            </svg>
            <p>{cardData.visitorsChange}%</p>
          </div>
        </div>

        <div className="stat-card stat-card-2">
          <div className="stat-card-left">
            <h1>{cardData.visits}</h1>
            <p>Visits</p>
          </div>
          <div className="stat-card-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.0984 6.81035C0.683001 7.22575 0.683001 7.89924 1.0984 8.31464L5.05949 12.2757C5.47489 12.6911 6.14838 12.6911 6.56378 12.2757L10.5249 8.31464C10.9403 7.89924 10.9403 7.22575 10.5249 6.81035C10.1095 6.39496 9.43598 6.39496 9.02059 6.81035L5.81164 10.0193L2.60268 6.81035C2.18729 6.39495 1.51379 6.39495 1.0984 6.81035Z"
                fill="#EB5757"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.0984 0.311506C0.683001 0.726903 0.683001 1.4004 1.0984 1.81579L5.05949 5.77689C5.47489 6.19228 6.14838 6.19228 6.56378 5.77689L10.5249 1.81579C10.9403 1.4004 10.9403 0.726904 10.5249 0.311507C10.1095 -0.103889 9.43598 -0.103889 9.02059 0.311507L5.81164 3.52046L2.60268 0.311507C2.18729 -0.103889 1.51379 -0.10389 1.0984 0.311506Z"
                fill="#EB5757"
              />
            </svg>
            <p>{cardData.visitsChange}%</p>
          </div>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default DashboardInsightChart;
