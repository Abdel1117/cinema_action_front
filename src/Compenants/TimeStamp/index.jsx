import React from 'react'
import { useEffect, useState } from 'react'

export default function TimeStamp() {
    const [expiryTime, setExpiryTime] = useState("1 jan 2023 08:00:00");
    const [countdownTime, setCountdownTime] = useState({
        countdownDays: "",
        countdownHours: "",
        countdownlMinutes: "",
        countdownSeconds: "",
    });

    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor(
                (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const totalMinutes = Math.floor(
                (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            const totalSeconds = Math.floor(
                (remainingDayTime % (1000 * 60)) / 1000
            );

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds,
            };

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }
        }, 1000);
    };


    useEffect(() => {
        countdownTimer();
    });
    return (
        <div className="grid grid-flow-col gap-5 lg:gap-10 text-center auto-cols-max  mx-auto w-fit mb-4">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content shadow-xl">
                <span className="countdown font-mono lg:text-5xl">
                    <span>{countdownTime.countdownDays}</span>
                </span>
                days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content shadow-xl">
                <span className="countdown font-mono lg:text-5xl">
                    <span>{countdownTime.countdownHours}</span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content shadow-xl">
                <span className="countdown font-mono lg:text-5xl">
                    <span>{countdownTime.countdownMinutes}</span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content shadow-xl">
                <span className="countdown font-mono lg:text-5xl">
                    <span>{countdownTime.countdownSeconds}</span>
                </span>
                sec
            </div>
        </div>
    )
}
