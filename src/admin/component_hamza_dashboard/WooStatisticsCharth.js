import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, defaults, elements, registerables, Ticks } from "chart.js";
import { callback } from "chart.js/helpers";

Chart.register(...registerables);

const WooStatisticCharth = () => {
  const [cardData, setCardData] = useState({
    newSubscribers: 85,
    newSubscribersChange: 0,
    unsubscribe: 59,
    unsubscribeChange: 0,
    subscribers: 699,
    subscribersChange: 0,
    revenue: 3845.57,
    revenueChange: 0,
  });

  const allData = [
    {
      date: "June 12",
      newSubscribers: 85,
      unsubscribe: 59,
      subscribers: 699,
      revenue: 3845.57,
    },
    {
      date: "June 13",
      newSubscribers: 90,
      unsubscribe: 60,
      subscribers: 710,
      revenue: 3890.0,
    },
    {
      date: "June 14",
      newSubscribers: 100,
      unsubscribe: 55,
      subscribers: 720,
      revenue: 4000.0,
    },
    {
      date: "June 15",
      newSubscribers: 95,
      unsubscribe: 65,
      subscribers: 705,
      revenue: 3950.0,
    },
    {
      date: "June 16",
      newSubscribers: 85,
      unsubscribe: 70,
      subscribers: 690,
      revenue: 3850.0,
    },
    {
      date: "June 17",
      newSubscribers: 90,
      unsubscribe: 75,
      subscribers: 680,
      revenue: 3900.0,
    },
    {
      date: "June 18",
      newSubscribers: 88,
      unsubscribe: 72,
      subscribers: 685,
      revenue: 3880.0,
    },
  ];

  const data = {
    labels: allData.map((d) => d.date),
    datasets: [
      {
        label: "",
        data: allData.map((d) => d.newSubscribers),
        fill: false,
        borderColor: "#194D79",
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

        const newSubscribersChange = calculateChange(
          allData[dataIndex].newSubscribers,
          allData[previousIndex].newSubscribers
        );
        const unsubscribeChange = calculateChange(
          allData[dataIndex].unsubscribe,
          allData[previousIndex].unsubscribe
        );
        const subscribersChange = calculateChange(
          allData[dataIndex].subscribers,
          allData[previousIndex].subscribers
        );
        const revenueChange = calculateChange(
          allData[dataIndex].revenue,
          allData[previousIndex].revenue
        );

        setCardData({
          newSubscribers: allData[dataIndex].newSubscribers,
          newSubscribersChange,
          unsubscribe: allData[dataIndex].unsubscribe,
          unsubscribeChange,
          subscribers: allData[dataIndex].subscribers,
          subscribersChange,
          revenue: allData[dataIndex].revenue,
          revenueChange,
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
    <div className="chart-container">
      <div className="stats-container">
        <div className="stat-card stat-card-1 woo-stat-card-1">
          <div className="stat-card-left">
            <h1>${cardData.revenue}</h1>
            <p>Total Sales</p>
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
            <p>{cardData.revenueChange}%</p>
          </div>
        </div>

        <div className="stat-card stat-card-2 woo-stat-card-2">
          <div className="stat-card-left">
            <h1>{cardData.unsubscribe}</h1>
            <p>Order</p>
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
            <p>{cardData.unsubscribeChange}%</p>
          </div>
        </div>

        <div className="stat-card stat-card-3">
          <div className="stat-card-left">
            <h1>{cardData.subscribers}</h1>
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
            <p>{cardData.subscribersChange}%</p>
          </div>
        </div>

        <div className="stat-card stat-card-4">
          <div className="stat-card-left">
            <h1>{cardData.newSubscribers}</h1>
            <p>Views</p>
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
                d="M0.752099 6.81035C0.336703 7.22575 0.336702 7.89924 0.752099 8.31464L4.71319 12.2757C5.12859 12.6911 5.80208 12.6911 6.21748 12.2757L10.1786 8.31464C10.594 7.89924 10.594 7.22575 10.1786 6.81035C9.76318 6.39496 9.08969 6.39496 8.67429 6.81035L5.46534 10.0193L2.25638 6.81035C1.84099 6.39495 1.1675 6.39496 0.752099 6.81035Z"
                fill="#EB5757"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.752099 0.311506C0.336703 0.726903 0.336702 1.4004 0.752099 1.81579L4.71319 5.77689C5.12859 6.19228 5.80208 6.19228 6.21748 5.77689L10.1786 1.81579C10.594 1.4004 10.594 0.726904 10.1786 0.311507C9.76318 -0.103889 9.08969 -0.103889 8.67429 0.311507L5.46534 3.52046L2.25638 0.311507C1.84099 -0.103889 1.1675 -0.10389 0.752099 0.311506Z"
                fill="#EB5757"
              />
            </svg>
            <p>{cardData.newSubscribersChange}</p>
          </div>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default WooStatisticCharth;
