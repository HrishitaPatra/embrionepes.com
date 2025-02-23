'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <div className="h-fit my-32 px-2"><h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center"><span className="gradient-text-animation">Kodikon 3.0</span> Registerations Open!</h1></div>;
    } else {
        return <div className="h-fit my-32 px-2 flex flex-col items-center justify-center gap-y-8">
            <h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center">Registerations Open In:</h1>
            <h1 className=" text-4xl md:text-6xl lg:text-8xl text-center bg-clip-text text-gray-200">{days}d:{hours}h:{minutes}min:{seconds}s</h1>
        </div>;
    }
};

const EventCountdown = () => {
    const [timeLeft, setTimeLeft] = useState(null)
    useEffect(() => {
        axios.get('/api/getTime').then((res) => {
            setTimeLeft(res.data.registerationsBeginDate)
        })
    })
    return (
        <div className="h-fit md:py-9">
            {
                timeLeft === null ? (
                    <h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center">Timer Coming Soon!</h1>
                ) : (
                    <Countdown
                        date={timeLeft}
                        renderer={renderer}
                    />
                )
            }
        </div>
    )
}
export default EventCountdown