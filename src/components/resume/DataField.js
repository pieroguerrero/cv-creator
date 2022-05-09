import { useEffect, useRef } from "react";

/**
 *
 * @param {{
 * strFieldName:string,
 * booIsRequired:boolean,
 * onValueChange:(strNewValue:string)=>void,
 * strInitialValue:string,
 * strInputType:string}} param0
 * @returns
 */
const DataField = ({
  strFieldName,
  booIsRequired,
  onValueChange,
  strInitialValue,
  strInputType,
}) => {
  const inputField = useRef(null);

  useEffect(() => {
    inputField.current.required = booIsRequired;
  });

  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold" htmlFor="input-field">
        {strFieldName}
      </label>
      <div>
        {/*TODO:agregar un if aqui para que se distinga entre TextArea e Input? */}
        <input
          ref={inputField}
          className="peer rounded-md border-[1px] border-solid shadow-inner text-[100%] p-1 pl-2 w-full"
          type={strInputType}
          id="input-field"
          name="input-field"
          autoComplete="off"
          placeholder=" "
          onBlur={(e) => onValueChange(e.currentTarget.value)}
          defaultValue={strInitialValue}
        />
        <span
          className="relative peer-required:after:absolute peer-required:after:text-white peer-required:after:bg-black peer-required:after:content-['required'] peer-required:after:text-[10px] peer-required:after:top-[-31px] peer-required:after:left-[-55px] peer-required:after:py-[2px] peer-required:after:px-2
        peer-required:after:rounded-md hidden peer-required:peer-placeholder-shown:inline"
        ></span>
      </div>
    </div>
  );
};

export { DataField };
