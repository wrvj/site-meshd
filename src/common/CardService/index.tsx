import { CardServiceContainer } from "./styles";

interface iProps {
  title: string;
  body: string;
  button: string;
}

export default function CardService(props: iProps) {
  const { title, body, button } = props;
  return (
    <CardServiceContainer>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{body}</p>
      </div>
      {/* <div>
        <Button variant="contained">{button}</Button>
      </div> */}
    </CardServiceContainer>
  );
}
