import React from "react";
import styled from "styled-components";

const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const IconControlWrapper = styled.div`
    position: relative;
    top: -40px;
    right: 10px;
    width: 24px;
    height: 24px;
    margin-left: auto;
`;

const Label = styled.label`
    display: flex;
    margin-left: 10px;
    position: relative;
    top: 10px;
    background-color: white;
    width: max-content;
    text-align: center;
    padding: 0 5px;

`;

type Props = {
    title?: string;
    type: string;
    name?: string;
    icon?: any;
    onClick?: () => void;
    value?: string | number;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
};

const InputField = styled.input<{ disabled: boolean | undefined }> ``;

const Input = ({title, type, name, icon, onClick = () => {}, value, onChange, placeholder, disabled}:Props) => {


    return (

            <FormControl>
                <Label htmlFor={name}>{title}</Label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                />
                <IconControlWrapper onClick={(e) => {
                    e.stopPropagation();
                     onClick();
                }}><div>{icon}</div></IconControlWrapper>
            </FormControl>



    );
}

export default Input;
