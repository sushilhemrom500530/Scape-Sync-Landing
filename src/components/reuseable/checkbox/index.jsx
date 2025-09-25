import { useController } from "react-hook-form";

const Checkbox = ({ control, name, content, colorClass }) => {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({
    name,
    control,
    defaultValue: false,
  });

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center rounded-full cursor-pointer"
        htmlFor={name}
        data-ripple-dark="true"
      >
        <input
          id={name}
          type="checkbox"
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          className={`
                   ${colorClass}
                    peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all hover:before:opacity-10 before:absolute before:top-1/2 before:left-1/2 before:block before:h-12 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity peer-checked:before:bg-gray-900`}
        />
        <span
          className="
                absolute text-white transition-opacity opacity-0 pointer-events-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 peer-checked:opacity-100
                "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className="font-light text-gray-700 cursor-pointer select-none"
        htmlFor={name}
      >
        {content}
      </label>
    </div>
  );
};

export default Checkbox;
