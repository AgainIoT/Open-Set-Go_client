import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["None   ", "Checked", "need authority"],
  datasets: [
    {
      label: "report chart",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const ReviewChart = () => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Custom Chart Title",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      maintainAspectRatio: false,
      responsive: false,
      legend: {
        position: "right",

        labels: {
          boxWidth: 20,
          font: {
            size: 13,
          },
          usePointStyle: true,
        },
        padding: 10,
      },
      tooltip: {
        titleFont: {
          size: 12,
        },
        bodyFont: {
          size: 12,
        },
        footerFont: {
          // size: 10, // there is no footer by default
        },
      },
    },
  };
  return (
    <StReviewChart>
      <DoughnutChart options={options} data={data} />
    </StReviewChart>
  );
};

const StReviewChart = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 25rem;
  height: 100%;
  min-height: 25rem;
`;
const DoughnutChart = styled(Doughnut)``;
