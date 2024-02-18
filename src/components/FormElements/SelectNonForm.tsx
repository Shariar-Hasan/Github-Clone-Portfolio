"use client";
import { SelectTagListType } from "@/types/propsTypes";
import { useEffect, useRef, useState } from "react";
type PropsType = {
  list: any[];
  label: string;
  setValue: (value: string) => void;
  defaultValue: string;
};
const Select = ({ list = [], label, setValue, defaultValue }: PropsType) => {
  const [selectValue, setSelectValue] = useState(defaultValue || list[0]?.title);
  const [screenExceeded, setScreenExceeded] = useState(true);
  const listRef = useRef<any>(null);
  // csutom fution to show the pop up in certein accurate place
  const handleFocus = (e: any) => {
    const winheight = window.innerHeight;
    const selectTagTopDistance = e.target.getBoundingClientRect().top;
    const selectTagBottomDistance =
      winheight - e.target.getBoundingClientRect().bottom;
    const top = listRef?.current?.getBoundingClientRect().top;
    const bottom = listRef?.current?.getBoundingClientRect().bottom;
    const selectTagSize = Math.abs(top - bottom);
    if (selectTagBottomDistance > selectTagSize) {
      setScreenExceeded(true);
    } else if (selectTagTopDistance > selectTagSize) {
      setScreenExceeded(false);
    } else {
      setScreenExceeded((prev) => prev);
    }
  };

  // handling the seletion
  const handleSelect = ({ title, value }: SelectTagListType) => {
    setValue(value);
    setSelectValue(title);
  };
  useEffect(() => {
    setSelectValue(
      list?.find(({ value }) => value === defaultValue)?.title || defaultValue
    );
  }, []);
  return (
    <div className="relative w-full group">
      <label className="text-xs text-dimmed">{label}</label>
      <button
        className="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between cornered font-semibold"
        onFocus={handleFocus}
      ><span className="sr-only">Button for select any value from the list </span>
        {selectValue}
      </button>
      {list?.length > 0 && (
        <div
          ref={listRef}
          className={`absolute z-[99999] ${
            screenExceeded ? "top-[100%]" : "bottom-[100%]"
          } left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-2 bg-back border border-dimmed text-xs md:text-sm`}
        >
          {list?.map(({ title, value }, i) => (
            <div
              key={title + i}
              onClick={() => handleSelect({ title, value })}
              className="w-full block cursor-pointer hover:bg-front hover:text-link px-3 py-1 rounded-md"
            >
              {title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
