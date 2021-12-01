import Card from "@mui/material/Card";
import { styled } from "@mui/system";

export const CardContainer = styled(Card)`
  display: flex;
  max-width: 512px;
  flex-direction: column;
  padding: 1rem 2rem;
  border-radius: 1rem;
  margin: 1rem 1rem;
  background: whitesmoke;

  :nth-of-type(3) {
      max-width: 1024px;
  }
`;
