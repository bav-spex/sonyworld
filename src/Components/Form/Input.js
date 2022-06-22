import React, { useState, useEffect } from "react";

const Input = ({
  textArea,
  type,
  name,
  label,
  onChange,
  onFocus,
  defaultValue,
  error,
  register,
  autoFocus,
  autoComplete,
  maxLength,
  inputMode,
  readOnly,
  helper,
  className,
  pattern,
  min,
  max,
  placeholder,
  value,
  dir,
  success,
}) => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!defaultValue) return;

    setEntered(true);

    return () => setEntered(false);
  }, [defaultValue]);

  return (
    <>
      {!textArea ? (
        <>
          <input
            dir={dir}
            type={type}
            name={name}
            ref={register}
            onFocus={({ target }) => {
              target.parentElement.classList.add("focused");
              if (onFocus) onFocus(target);
            }}
            onBlur={({ target }) =>
              target.parentElement.classList.remove("focused")
            }
            onChange={({ target }) => {
              if (onChange) onChange(target.value);
              setEntered(target.value !== "");
            }}
            spellCheck={false}
            defaultValue={defaultValue}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            maxLength={maxLength}
            inputMode={inputMode}
            readOnly={readOnly}
            pattern={pattern}
            min={min}
            max={max}
            placeholder={placeholder}
            value={value}
          />
        </>
      ) : (
        <textarea
          name={name}
          ref={register}
          onFocus={({ target }) =>
            target.parentElement.classList.add("focused")
          }
          onBlur={({ target }) =>
            target.parentElement.classList.remove("focused")
          }
          onChange={({ target }) => setEntered(target.value !== "")}
          spellCheck={false}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          maxLength={maxLength}
          inputMode={inputMode}
          readOnly={readOnly}
          rows={4}
        />
      )}
    </>
  );
};

export default Input;
