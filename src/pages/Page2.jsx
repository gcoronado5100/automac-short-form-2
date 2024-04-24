import { Box, Typography, Slider, Button } from "@mui/material";

export const Page2 = ({ data, setData, setPage }) => {
  const handleChange = (e, value) => {
    setData({ ...data, monthlyBudget: value });
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      minHeight='inherit'
      gap='1rem'
    >
      <Box>
        <Typography variant='h4' fontWeight='bold' textAlign='center'>
          What is Your Monthly Budget
        </Typography>
      </Box>
      <Box width='90%' maxWidth='600px' m='auto'>
        <Typography variant='h5' fontWeight='bold' textAlign='center'>
          ${data.monthlyBudget}
          {data.monthlyBudget >= 900 ? "+" : ""}
        </Typography>
        <Slider
          min={200}
          max={900}
          step={50}
          value={data.monthlyBudget}
          onChange={handleChange}
        />
      </Box>

      <Box display='flex' justifyContent='center' alignItems='center' m='1rem'>
        <Button
          variant='contained'
          color='error'
          size='large'
          onClick={() => setPage(3)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
