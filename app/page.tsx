"use client";
import { useState } from "react";
import { FaSadCry, FaSmile } from "react-icons/fa";

export default function Home() {
  const [randomNum, setRandomNum] = useState<any>(0);
  const [inputValue, setInputValue] = useState("");
  const [userGuess, setUserGuess] = useState(""); // New state for storing user's guess
  const [click, setClick] = useState(false);

  //hint state
  const [hint, setHint] = useState<string>("");
  const [hintClick, setHintClick] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  const hintHandler = () => {
    const num = Math.floor(Math.random() * 10 + 1);
    setRandomNum(num);
    setShowHint(true);
    setHintClick(true);
    if (num >= 1 && num <= 4) {
      setHint("Guessing number is between 1 and 4");
    } else if (num >= 5 && num <= 7) {
      setHint("Guessing number is between 5 and 7");
    } else if (num >= 8 && num <= 10) {
      setHint("Guessing number is between 8 and 10");
    }
  };

  const handler = () => {
    if (!hintClick) {
      setRandomNum(Math.floor(Math.random() * 10 + 1));
    }
    setShowHint(false);
    setHintClick(false);
    setUserGuess(inputValue); // Store the user's guess before clearing the input
    setClick(true);
    setInputValue(""); // Clear the input field when the button is clicked
  };

  const onChangeHandler = (e: any) => {
    setClick(false);
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= 10) {
      setInputValue(e.target.value);
    }
  };

  //hint fnction

  return (
    <main className="text-center mt-8">
      <h1 className="text-3xl font-bold text-yellow-600">
        Number Guessing Game
      </h1>
      <input
        onChange={onChangeHandler}
        value={inputValue} // Bind the input field value to the state
        type="number"
        placeholder="Guess the number between 1 to 10"
        className="mt-8 p-4  rounded-lg border-2 border-yellow-600 w-full max-w-md focus:text-green-900"
      />
      <div className="m-8">
        <button
          onClick={handler}
          className="text-white m-2 bg-yellow-600 p-4 rounded-lg pl-8 pr-8 font-bold text-xl"
        >
          Result
        </button>
        {/* hint button */}
        {!showHint && (
          <button
            onClick={hintHandler}
            className="text-white m-2 bg-yellow-600 p-4 rounded-lg pl-8 pr-8 font-bold text-xl"
          >
            Get Hint
          </button>
        )}
        {hintClick && showHint && (
          <p className="text-yellow-600 font-bold text-2xl">{hint}</p>
        )}
        {click && userGuess != "" && !showHint && (
          <div className="text-white mt-4">
            <p className="text-yellow-600 font-bold text-2xl">
              Your guessing number: {userGuess} {/* Display the user's guess */}
            </p>
            <p className="text-yellow-600 font-bold text-2xl">
              Computer guessing number: {randomNum}
            </p>
            <div className="bg-gray-800 mt-4 p-4 rounded-md max-w-md mx-auto">
              {userGuess == randomNum ? (
                <div className="flex flex-col items-center">
                  <FaSmile className="text-yellow-500 text-4xl" />
                  <p className="text-yellow-500 p-4 text-2xl">
                    You Won The Game
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <FaSadCry className="text-yellow-500 text-4xl" />
                  <p className="text-yellow-500 p-4 text-2xl">
                    You Lose The Game
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
