"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
    { value: 61, label: '61% Direct Booking', color: '#2562eb' },
    { value: 12, label: '12% Booking.com', color: '#33b8e3' },
    { value: 11, label: '11% Agoda', color: '#69a9be' },
    { value: 9, label: '9% Airbnb', color: '#84d4ee' },
    { value: 5, label: '5% Hotels.com', color: '#E8F7FB' },
    { value: 2, label: '2% Others', color: '#B5E5F4' },

];

const size = {
    width: 450,
    height: 300,
};

export default function BookingChart() {
    return (
        <div className=''>
            <PieChart
                series={[
                    {
                        data,
                        innerRadius: 60,
                        outerRadius: 110,
                        labelPosition:60,
                        paddingAngle: 5,
                        cx: 130,
                        cy: 150,
                    },
                ]}
                slotProps={{
                    legend: {
                        labelStyle: {fontSize: 14, color: "gray" },
                        labelOffset: -10,
                    }
                }}
                {...size}>
            </PieChart>
        </div>
    );
}