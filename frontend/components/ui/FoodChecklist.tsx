"use client";

import { Check } from "lucide-react";

const foodCategories = [
  { name: "Burgers", checked: true },
  { name: "Pizza", checked: true },
  { name: "Sushi", checked: false },
  { name: "Tacos", checked: true },
  { name: "Pasta", checked: false },
  { name: "Salads", checked: true },
  { name: "Ramen", checked: false },
  { name: "Sandwiches", checked: true },
];

const FoodChecklist = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-2xl h-fit">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 font-(family-name:--font-caudex)">
          Pick the foods you love
        </h2>
        <p className="text-xs text-gray-500 font-(family-name:--font-caudex)">
          Select your favorites to get personalized deals
        </p>
      </div>

      {/* Checklist */}
      <div className="grid grid-cols-2 gap-2">
        {foodCategories.map((food, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
              food.checked
                ? "bg-[#e8efff] border border-[#c1d3fe]"
                : "bg-gray-50 border border-transparent hover:bg-gray-100"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-md flex items-center justify-center ${
                food.checked ? "bg-[#b6ccfe]" : "border-2 border-gray-300"
              }`}
            >
              {food.checked && <Check className="w-3 h-3 text-white" />}
            </div>
            <span
              className={`text-sm font-medium font-(family-name:--font-caudex) ${
                food.checked ? "text-gray-900" : "text-gray-600"
              }`}
            >
              {food.name}
            </span>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#b6ccfe] to-[#c1d3fe] text-gray-800 rounded-xl font-semibold text-sm shadow-lg shadow-blue-100 active:scale-95 transition-transform font-(family-name:--font-caudex)">
        Save Preferences
      </button>
    </div>
  );
};

export default FoodChecklist;
