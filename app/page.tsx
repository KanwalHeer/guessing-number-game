"use client";
import { useState } from "react";
import { FaSadCry, FaSmile } from "react-icons/fa";

export default function Home() {
  const [randomNum, setRandomNum] = useState<any>(0);
  const [inputValue, setInputValue] = useState("");
  const [userGuess, setUserGuess] = useState(""); // New state for storing user's guess
  const [click, setClick] = useState(false);

  const handler = () => {
    setUserGuess(inputValue); // Store the user's guess before clearing the input
    setClick(true);
    setRandomNum(Math.floor(Math.random() * 10 + 1));
    setInputValue(""); // Clear the input field when the button is clicked
  };

  const onChangeHandler = (e: any) => {
    setClick(false);

    try {
      if (e.target.value > 0 && e.target.value <= 10) {
        setInputValue(e.target.value);
      }
    } catch (error) {
      alert("Number must be between 1 to 10")
    }

    
  };

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
        className="mt-8 p-4  rounded-lg border-2 border-yellow-600 w-full max-w-md focus:text-green-800"
      />
      <div className="m-8">
        <button
          onClick={handler}
          className="text-white m-2 bg-yellow-600 p-4 rounded-lg pl-8 pr-8 font-bold text-xl"
        >
          Result
        </button>
        {click && userGuess != "" && (
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
