import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import Link from "next/link";

export default function About() {
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
        <Link href="/" passHref legacyBehavior>
          <Button variant="contained" color="primary">
            Click Here to Search for Pets
          </Button>
        </Link>
      </Box>
    </>
  );
}
