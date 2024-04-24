import { Box } from "@mui/material";

export const Footer = ({ page, setActivePage }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='15px'
      p='15px'
      borderTop='1px solid rgba(0, 0, 0, 0.15)'
    >
      <Box
        display='flex'
        justifyContent='space-around'
        sx={{
          "& > div": {
            border: "solid 1px #ccc",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            cursor: "pointer",
          },
        }}
      >
        <Box
          backgroundColor={page === 1 ? "red" : "transparent"}
          color={page === 1 ? "white" : "black"}
        >
          1
        </Box>
        <Box
          backgroundColor={page === 2 ? "red" : "transparent"}
          color={page === 2 ? "white" : "black"}
        >
          2
        </Box>
        <Box
          backgroundColor={page === 3 ? "red" : "transparent"}
          color={page === 3 ? "white" : "black"}
        >
          3
        </Box>
        <Box
          backgroundColor={page === 4 ? "red" : "transparent"}
          color={page === 4 ? "white" : "black"}
        >
          4
        </Box>
      </Box>
    </Box>
  );
};
