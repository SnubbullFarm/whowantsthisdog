import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { Dispatch, SetStateAction } from "react";
import { State } from "../Classes/State";

interface Props {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
}

export default function About({ state, setState }: Props) {
  return (
    <>
      <Box flex={4} p={{ xs: 0, md: 2 }}>
        <h1>Purpose</h1>
        <p>Purpose TBD</p>
        <h1>Goal</h1>
        <p>TBD</p>
        <h1>How to use the site</h1>
        <p>TBD</p>
        <h1>Who We Are</h1>
        <p>TBD</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setState(State.Results)}
        >
          Click Here to Search for Pets
        </Button>
      </Box>
    </>
  );
}
