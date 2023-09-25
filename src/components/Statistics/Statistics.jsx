import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredDonation } from '../../utility/localstorage';
import { Chart } from "react-google-charts";

const Statistics = () => {

    const cards = useLoaderData();

    const [donatedData, setDonatedData] = useState([])

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (cards.length > 0) {

            const donated = [];
            for (const id of storedDonationIds) {
                const card = cards.find(card => card.id === id);
                if (card) {
                    donated.push(card);
                }
            }
            setDonatedData(donated);
        }
    }, [cards])

    const total = cards.length + donatedData.length;
    const percentageData1 = (cards.length / total) * 100;
    const percentageData2 = (donatedData.length / total) * 100;

    const chartData = [
        ["Data", "Percentage"],
        ["Total Categories", percentageData1],
        ["Donated Categories", percentageData2],
    ];

    const options = {
        title: "Percentage Chart",
    };



    return (
        <Chart
            chartType="PieChart"
            data={chartData}
            options={options}
            width={"100%"}
            height={"1000px"}
        />
    )

}

export default Statistics