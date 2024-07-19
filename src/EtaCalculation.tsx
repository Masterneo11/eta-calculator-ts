import React, { useState } from 'react';

const EtaCalculation: React.FC = () => {
    const [speed, setSpeed] = useState<number | string>("");
    const [distance, setDistance] = useState<number | string>("");
    const [result, setResult] = useState<number | null>(null);

    const handleSpeedInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.valueAsNumber;
        // ternary oper if Nan if false return Value 
        setSpeed(isNaN(value) ? "" : value);
    }
    const handleDistance = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.valueAsNumber;
        // ternary operator if NaN if false return Value 
        setDistance(isNaN(value) ? "" : value);

    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        const speedNumber = Number(speed);
        const distanceNumber = Number(distance);
        if (!isNaN(speedNumber) && !isNaN(distanceNumber) && speedNumber !== 0) {
            const result = distanceNumber / speedNumber;
            setResult(result);
            console.log(result);
        } else {
            setResult(null);
            console.log("Invalid input");
        }
    };
    return (
        <form>
            <div className='info'> Enter a speed and a distance. Below will give you a time arrival estimate</div>
            <div className="length">
                <label htmlFor="speed">Enter Speed:</label>
                <input
                    id="speed"
                    type="number"
                    value={speed}
                    onChange={handleSpeedInput}
                    placeholder="Number in Mph" />
            </div>
            <div className="miles">
                <label htmlFor="distance">Enter Miles: </label>
                <input
                    id="distance"
                    type="number"
                    value={distance}
                    onChange={handleDistance}
                    placeholder="0" />
            </div>
            <div className="enter">
                <button
                    onClick={handleClick}
                    type="submit"
                    className="submit"
                    title='button'
                > Enter </button>
            </div>
            {result !== null && (
                <div className="result">
                    <p>Eta :    {result.toFixed(2)} hours</p>
                </div>
            )}
        </form>
    );
}

export default EtaCalculation;
