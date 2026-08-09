import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

import './BarChart.css';
import { bitcoinPrices } from "../fakePrices";

const BarChart = ({ minPrice = 0, maxPrice = 0 }) => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        // The source series is padded with leading/trailing zeros, drop them so
        // the liquidity distribution fills the chart area
        const firstIndex = bitcoinPrices.findIndex((value) => value > 0);
        const lastIndex = bitcoinPrices.length - 1 -
            [...bitcoinPrices].reverse().findIndex((value) => value > 0);

        setPrices(firstIndex === -1 ? [] : bitcoinPrices.slice(firstIndex, lastIndex + 1));
    }, []);

    // Highlight the bars that fall inside the selected price range
    const hasRange = Number(minPrice) > 0 && Number(maxPrice) > Number(minPrice);
    const inRangeColor = "rgb(252, 114, 255)";
    const outOfRangeColor = "rgba(252, 114, 255, 0.28)";

    const barColors = prices.map((_, index) => {
        if (!hasRange || prices.length < 2) return inRangeColor;
        // Map the range onto the series positions
        const position = index / (prices.length - 1);
        const lo = Math.min(Number(minPrice), Number(maxPrice));
        const hi = Math.max(Number(minPrice), Number(maxPrice));
        const span = Math.max(hi, 1);
        return position >= lo / span && position <= hi / span
            ? inRangeColor
            : outOfRangeColor;
    });

    const options = {
        chart: {
            type: "bar",
            height: 350,
            background: "transparent",
            toolbar: { show: false },
            animations: { enabled: false },
            selection: { enabled: false },
            zoom: { enabled: false }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "90%",
                distributed: true,
                borderRadius: 1
            }
        },
        colors: barColors,
        legend: { show: false },
        dataLabels: { enabled: false },
        stroke: { width: 0 },
        xaxis: {
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
            tooltip: { enabled: false }
        },
        yaxis: { show: false },
        grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } },
        tooltip: {
            theme: "dark",
            x: { show: false },
            y: {
                formatter: (value) => `$${Number(value).toLocaleString()}`,
                title: { formatter: () => "Liquidity" }
            }
        },
        noData: {
            text: "Loading...",
            style: { color: "rgb(152, 161, 192)" }
        }
    };

    return (
        <React.Fragment>
            <div className="liquidity-bar-chart">
                <ReactApexChart
                    options={options}
                    series={[{ name: "Liquidity", data: prices }]}
                    type="bar"
                    height={350}
                />
            </div>
        </React.Fragment>
    );
};

export default BarChart;
