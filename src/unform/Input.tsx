import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

interface iProps {
  name: string;
}

export default function Input({ name, ...rest }: any) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div style={{ margin: "5px 0"}}>
      <CustomInput
        size="medium"
        inputRef={inputRef}
        defaultValue={defaultValue}
        error={error}
        helperText={error}
        variant="outlined"
        fullWidth
        {...rest}
      />
    </div>
  );
}

const CustomInput = styled(TextField)`
  margin: 4px 0;
  input {
    /* padding: 4px 4px; */
    scrollbar-width: none;

  }

  input:-webkit-scrollbar {
    width: 3px;
  }
`;
