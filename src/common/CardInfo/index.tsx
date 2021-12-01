import Button from "@mui/material/Button";
import React from "react";
import { CardContainer } from "./styles";

interface iProps {
  title: string;
  body: string;
  button: string;
}

export default function CardInfo(props: iProps) {
  const { title, body, button } = props;
  return (
    <CardContainer>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{body}</p>
      </div>
      <div>
        <Button>{button}</Button>
      </div>
    </CardContainer>
  );
}
