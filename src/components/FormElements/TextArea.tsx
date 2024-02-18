type TextAreaType = {
  [x: string]: any;
  label: string;
  errors: any;
  name: string;
  register: any;
  required?: boolean;
};

const TextArea = ({
  label,
  errors,
  name,
  register,
  required,
  ...rest
}: TextAreaType) => {
  return (
    <div className="mt-4">
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          id={label + "id"}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-brand focus:outline-none resize-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          rows={5}
          {...register}
          {...rest}
        ></textarea>
        <label
          htmlFor={label + "id"}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-brand peer-focus:dark:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label} {required && <sup className="text-red-600">*</sup>}
        </label>
        {errors[name] && (
          <p className="text-red-600 text-xs">*{errors[name].message}</p>
        )}
      </div>
    </div>
  );
};

export default TextArea;
