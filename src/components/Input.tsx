import React from 'react';

type InputProps = {
    value: string | number
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, handleOnChange}: InputProps) => {
    return <input type="text" value={value} onChange={(event) => handleOnChange(event)} />;
};

