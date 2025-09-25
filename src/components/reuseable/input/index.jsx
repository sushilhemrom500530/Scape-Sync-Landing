import Image from "next/image";
import { useState } from "react";
import { useController } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FloatingLabelInput = ({
  name,
  type = "text",
  control,
  rules,
  placeholder,
  colorClass,
  id = "input",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  return (
    <div>
      <div className="relative mt-2 w-full">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          placeholder=" "
          className={`
     !boder-[1px] ring-1 ring-[#919EAB52] border-[#919EAB52] peer block w-full appearance-none rounded transition px-2.5 pb-2.5 pt-4 text-sm  outline-none  hover:border-[#919EAB52] focus:border-[#919EAB52] focus:ring-1 focus:ring-[#919EAB52]  ${colorClass}
    ${
      error
        ? "border-red-600 bg-red-50 focus:border-red-600 focus:ring-red-600"
        : ""
    }
  `}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 top-[14px] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash size={18} color="#637381" />
            ) : (
              <FaEye size={18} color="#637381" />
            )}
          </button>
        )}

        <label
          htmlFor={id}
          className={`absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-base text-[#919eab] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#919EAB] z-50 ${
            error ? "bg-red-50 focus:bg-white rounded-full" : ""
          }`}
        >
          {placeholder}
        </label>
      </div>
      {error && (
        <div className="flex items-center justify-end text-red-500 mt-1">
          <span className="mr-1 text-xs">
            {error.message || "This field is required"}
          </span>
          <Image
            className="w-5 h-5"
            src="https://i.postimg.cc/rwxT9jXz/exclamation-mark.webp"
            alt="error-icon"
            width={20}
            height={20}
          />
        </div>
      )}
    </div>
  );
};

export default FloatingLabelInput;
