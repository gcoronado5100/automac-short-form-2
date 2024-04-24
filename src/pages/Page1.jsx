import {
  Box,
  Button,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

export const Page1 = ({ data, setData, setPage }) => {
  const handleAction = (type) => {
    setData({ ...data, vehicleType: type });
    setPage(2);
  };
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      minHeight='inherit'
    >
      <Box>
        <Box display='flex' flexDirection='column' gap='1rem'>
          <Typography variant='h4' fontWeight='bold' textAlign='center'>
            What type of Vehicle do you want?
          </Typography>
          <Typography textAlign='center'>
            Select the type of vehicle you are interested in purchasing.
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <FormControl>
            <RadioGroup
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: "25px",
                "& > div": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                  transition: "ease-in-out 0.2s",
                },
                "& > div > img": {
                  width: "100%",
                  filter: "blur(5px)",
                  transition: "ease-in-out 0.2s",
                },
                "& > div:hover > img": {
                  filter: "none",
                },
                "& > div > img.SelectedBlock": {
                  filter: "none",
                },
              }}
            >
              <Box>
                <img
                  onClick={() => handleAction("car")}
                  src='https://automaceast.com/wp-content/uploads/2024/04/Option-1-Car.webp'
                  className={data.vehicleType === "car" ? "SelectedBlock" : ""}
                  alt=''
                />
                <FormControlLabel
                  value='car'
                  control={<Radio />}
                  label='Car'
                  checked={data.vehicleType === "car"}
                  onChange={() => handleAction("car")}
                />
              </Box>
              <Box>
                <img
                  src='https://automaceast.com/wp-content/uploads/2024/04/Option-2-Car.webp'
                  className={data.vehicleType === "suv" ? "SelectedBlock" : ""}
                  onClick={() => handleAction("suv")}
                  alt=''
                />
                <FormControlLabel
                  value='suv'
                  control={<Radio />}
                  label='SUV'
                  checked={data.vehicleType === "suv"}
                  onChange={() => handleAction("suv")}
                />
              </Box>
              <Box>
                <img
                  src='https://automaceast.com/wp-content/uploads/2024/04/Option-3-Car.webp'
                  className={data.vehicleType === "van" ? "SelectedBlock" : ""}
                  alt=''
                  onClick={() => handleAction("van")}
                />
                <FormControlLabel
                  value='van'
                  control={<Radio />}
                  label='Van'
                  checked={data.vehicleType === "van"}
                  onChange={() => handleAction("van")}
                />
              </Box>
              <Box>
                <img
                  src='https://automaceast.com/wp-content/uploads/2024/04/Option-4-Car.webp'
                  onClick={() => handleAction("truck")}
                  className={
                    data.vehicleType === "truck" ? "SelectedBlock" : ""
                  }
                  alt=''
                />
                <FormControlLabel
                  value='truck'
                  control={<Radio />}
                  label='Truck'
                  checked={data.vehicleType === "truck"}
                  onChange={() => handleAction("truck")}
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' m='1rem'>
        <Button
          variant='contained'
          size='large'
          color='error'
          onClick={() => setPage(2)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
