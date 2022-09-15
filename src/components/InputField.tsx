import React from "react";

type Input = {
  onChange: any;
  type: 'text' | 'email' | 'number';
  id: string;
  children: string;
  className?: string;
  value?: string | number;
  onBlur?: any;
  style?: any;
}

const InputField = ({onChange, type, id, children, className, value, onBlur, style}: Input) => {
  return (
    <div className={className}>
      <div className="form-floating mb-3">
        <input
          required
          onBlur={onBlur}
          style={style}
          value={value}
          onChange={onChange}
          type={type}
          className="form-control"
          id={id}
          placeholder={children}/>
        <label className="labelSize" htmlFor={id}>{children}</label>
      </div>
    </div>
  )
};
export default InputField;
