import { useEffect, useRef, useState } from "react";

const Select = ({
  list = [],
  label,
  errors,
  name,
  register,
  setValue,
  defaultValue,
  required,
  ...rest
}) => {
  const [selectValue, setSelectValue] = useState(defaultValue);
  const [currentList, setCurrentList] = useState(list);
  const [screenExceeded, setScreenExceeded] = useState(true);
  const listRef = useRef<any>(null);
  const selectRef = useRef<any>(null);

  const handleFocus = (e : Event) => {
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

  useEffect(() => {
    setCurrentList(list);
  }, []);
  const handleSelect = (val) => {
    setValue(name, val);
    selectRef.current.value = val;
    // setSelectValue(val)
  };

  return (
    <div className="mt-4">
      <div className="relative w-full  group ">
        <input type="text" className="w-0 h-0 hidden" {...register} />
        <input
          id={label + "id"}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer cursor-pointer"
          placeholder=" "
          ref={selectRef}
          value={selectValue}
          onFocus={handleFocus}
          readOnly
          {...rest}
        />
        {currentList.length > 0 && (
          <div
            ref={listRef}
            className={`absolute z-[99999] ${
              screenExceeded ? "top-[110%]" : "bottom-[110%]"
            } left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg w-full peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-2 bg-back`}
          >
            {currentList?.map(({ title, value: val }, i) => (
              <div
                key={i}
                onClick={() => handleSelect(val)}
                className="w-full block cursor-pointer hover:bg-front hover:text-link px-3 py-1 rounded-md"
              >
                {title}
              </div>
            ))}
          </div>
        )}

        <label
          htmlFor={label + "id"}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
          {required && <sup className="text-red-600">*</sup>}
        </label>
        {errors[name] && (
          <p className="text-red-600 text-xs">*{errors[name].message}</p>
        )}
      </div>
    </div>
  );
};

export default Select;