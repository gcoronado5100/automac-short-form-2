import { Box, Button, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Page5 = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      minHeight='inherit'
    >
      <Box>
        <Typography variant='h4' align='center'>
          Thank you for submitting your information!
        </Typography>
        <Typography variant='h6' align='center'>
          We will reach out to you shortly.
        </Typography>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          mt={3}
          color='green'
        >
          <CheckCircleIcon sx={{ fontSize: 100 }} />
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' m='1rem'>
        <a href={import.meta.env.VITE_SITE_CALLBACK_URL}>
          <Button variant='contained' color='error' size='large'>
            CONTINUE
          </Button>
        </a>
      </Box>
    </Box>
  );
};
