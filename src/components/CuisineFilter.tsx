import { cuisineList } from "@/config/restaurant-options-config";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

interface Props {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
}

export default function CuisineFilter({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) {
  const handleCuisineReset = () => onChange([]);
  const handleCuisineChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuisinesList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisinesList);
  };
  return (
    <>
      <div className='flex justify-between items-center px-2'>
        <div className='text-sm font-semibold mb-2'>Filter By Cuisine</div>
        <div
          onClick={handleCuisineReset}
          className='text-sm font-semibold mb-2 underline cursor-pointer text-blue-500'
        >
          Reset Filter
        </div>
      </div>
      <div className='space-y-2 flex flex-col'>
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisine, index) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div key={index} className='flex'>
                <input
                  id={`cuisine_${cuisine}`}
                  type='checkbox'
                  className='hidden'
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisineChange}
                />
                <label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </label>
              </div>
            );
          })}
        <Button
          onClick={onExpandedClick}
          variant={"link"}
          className='mt-4 flex-1'
        >
          {isExpanded ? (
            <span className='flex flex-row items-center'>
              View Less <ChevronUp />
            </span>
          ) : (
            <span className='flex flex-row  items-center'>
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
}
