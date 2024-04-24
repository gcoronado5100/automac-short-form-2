import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const Page4 = ({ data, setData, setPage }) => {
  const [loading, setLoading] = useState(false);
  const handleExtraInfoChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleAddressChange = (e) => {
    setData({
      ...data,
      address: { ...data.address, [e.target.name]: e.target.value },
    });
  };

  const handleFinishForm = () => {
    setLoading(true);

    const config = {
      method: "put",
      maxBodyLength: "Infinity",
      url: `${import.meta.env.VITE_GF_BASE_URL}/entries/${data.entry}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          import.meta.env.VITE_USER_APP +
            ":" +
            import.meta.env.VITE_USER_APP_PASSWORD
        )}`,
      },
      data: {
        1: data.vehicleType,
        3: data.monthlyBudget,
        4: data.firstName,
        5: data.lastName,
        6: data.email,
        7: data.phone,
        14: data.address.street,
        13: data.address.city,
        12: data.address.state,
        11: data.address.zip,
        10: data.birthDate,
        9: data.employmentStatus,
        8: data.monthlyIncome,
      },
    };

    axios
      .request(config)
      .then(() => {
        setLoading(false);
        setPage(5);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      minHeight='inherit'
    >
      {loading && (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <CircularProgress />
        </Box>
      )}
      <Box display='flex' flexDirection='column' gap='1rem'>
        <Box>
          <Typography
            variant='h4'
            fontWeight='bold'
            textAlign='center'
            textTransform='uppercase'
          >
            Aditional Information
          </Typography>
          <Typography textAlign='center'>
            This information is not necessary but it will help us to provide you
            better service.
          </Typography>
        </Box>
        <Box>
          <TextField
            name='street'
            label='Street Address'
            value={data.address.street}
            onChange={handleAddressChange}
            variant='outlined'
            fullWidth
          />
        </Box>
        <Box
          display='flex'
          gap='1rem'
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <TextField
            name='city'
            label='City'
            variant='outlined'
            value={data.address.city}
            onChange={handleAddressChange}
            fullWidth
          />
          <TextField
            name='state'
            label='State'
            variant='outlined'
            value={data.address.state}
            onChange={handleAddressChange}
            fullWidth
          />
          <TextField
            name='zip'
            label='Zip'
            variant='outlined'
            value={data.address.zip}
            onChange={handleAddressChange}
            fullWidth
          />
        </Box>
        <Box
          display='flex'
          gap='1rem'
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <TextField
            name='birthDate'
            label='Birth Date'
            variant='outlined'
            value={data.birthDate}
            onChange={handleExtraInfoChange}
            fullWidth
          />
          <TextField
            name='employmentStatus'
            label='Employment Status'
            variant='outlined'
            value={data.employmentStatus}
            onChange={handleExtraInfoChange}
            fullWidth
          />
          <TextField
            name='monthlyIncome'
            label='Monthly Income'
            variant='outlined'
            value={data.monthlyIncome}
            onChange={handleExtraInfoChange}
            fullWidth
          />
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' m='1rem'>
        <Button
          color='error'
          variant='contained'
          size='large'
          onClick={handleFinishForm}
        >
          <Typography>Submit</Typography>
        </Button>
      </Box>
    </Box>
  );
};
