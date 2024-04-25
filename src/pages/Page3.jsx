import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const extractEntryId = (htmlString) => {
  // Crear un elemento temporal para insertar el HTML proporcionado
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;

  // Seleccionar el div dentro del elemento temporal
  const gformConfirmationMessage = tempElement.querySelector(
    ".gform_confirmation_message"
  );

  // Verificar si se encontró el div y devolver su contenido, o null si no se encontró
  return gformConfirmationMessage ? gformConfirmationMessage.textContent : null;
};

export const Page3 = ({ data, setData, qty, setPage }) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  const handlePersonalInfoChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePageSumbit = () => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.phone === ""
    ) {
      setError({
        firstName: data.firstName === "" ? true : false,
        lastName: data.lastName === "" ? true : false,
        email: data.email === "" ? true : false,
        phone: data.phone === "" ? true : false,
      });

      return;
    }

    setLoading(true);

    const config = {
      method: "post",
      maxBodyLength: "Infinity",
      url: `${import.meta.env.VITE_GF_BASE_URL}/forms/${
        import.meta.env.VITE_GF_FORM_ID
      }/submissions`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          import.meta.env.VITE_USER_APP +
            ":" +
            import.meta.env.VITE_USER_APP_PASSWORD
        )}`,
      },
      data: {
        input_1: data.vehicleType,
        input_3: data.monthlyBudget,
        input_4: data.firstName,
        input_5: data.lastName,
        input_6: data.email,
        input_7: data.phone,
        input_14: data.address.street,
        input_13: data.address.city,
        input_12: data.address.state,
        input_11: data.address.zip,
        input_10: data.birthDate,
        input_9: data.employmentStatus,
        input_8: data.monthlyIncome,
      },
    };

    axios
      .request(config)
      .then((res) => {
        setData({
          ...data,
          entry: extractEntryId(res.data.confirmation_message),
        });
        setLoading(false);
        setPage(4);
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
      <Box>
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
              Congrats!
            </Typography>
            <Typography textAlign='center'>
              Our system found {qty}+ <b>{data.vehicleType}</b> . Get these
              deals emailed instantly with $0 Down Payment Option.
            </Typography>
          </Box>
          <Box
            display='grid'
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap='1rem'
          >
            <TextField
              name='firstName'
              value={data.firstName}
              onChange={handlePersonalInfoChange}
              label='First Name'
              variant='outlined'
              error={error.firstName}
              helperText={error.firstName && "First Name is required"}
              fullWidth
            />
            <TextField
              name='lastName'
              label='Last Name'
              value={data.lastName}
              onChange={handlePersonalInfoChange}
              variant='outlined'
              error={error.lastName}
              helperText={error.lastName && "Last Name is required"}
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              name='email'
              label='Email'
              variant='outlined'
              value={data.email}
              onChange={handlePersonalInfoChange}
              error={error.email}
              helperText={error.email && "Email is required"}
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              name='phone'
              label='Phone'
              variant='outlined'
              value={data.phone}
              onChange={handlePersonalInfoChange}
              error={error.phone}
              helperText={error.phone && "Phone is required"}
              fullWidth
            />
          </Box>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' m='1rem'>
        <Button
          variant='contained'
          color='error'
          size='large'
          onClick={handlePageSumbit}
          disabled={loading}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
