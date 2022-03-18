import React from 'react';

function TextBox(props: {label: string; change: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div>
      <label>{props.label}</label>
      <input type={"text"}
        onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
            ): void => {
                props.change(ev.target.value);
            }}
      />
    </div>
  );
}

export default TextBox;
