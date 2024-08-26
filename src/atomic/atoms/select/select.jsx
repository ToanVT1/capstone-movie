import { useState } from "react";
import { TranslateIcon } from "../../../common/icons/translate";

// import srcTranslate from "../../../common/icons/translate.svg";

/**
 * options: [
 * {
 *  key: string | number
 *  value: any,
 *  label: string | ReactElement
 * }
 * ]
 *
 * value: any
 *
 * onChange: function
 *
 *
 */
export function Select({ prefixIcon, options, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="relative inline-block ">
        <button
          onClick={() => setShow(!show)}
          className="bg-[#333] px-3 rounded-full flex items-center gap-2 min-w-[14rem]"
        >
          {prefixIcon}

          {options.find((i) => i.value === value).label}
        </button>

        <ul
          className={`absolute bg-black px-2 py-3 rounded-lg top-[110%] left-1/2 -translate-x-1/2 ${show ? "block" : "hidden"}`}
        >
          {options.map((i) => {
            return (
              <button
                key={i.key}
                onClick={() => {
                  onChange(i.value);
                }}
              >
                {i.label}
              </button>
            );
          })}
        </ul>
      </div>
    </>
  );
}
