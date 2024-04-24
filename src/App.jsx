import { Page1, Page2, Page3, Page4, Page5 } from "./pages";
import { Footer } from "./Footer";
import { Box } from "@mui/material";
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

const App = () => {
  const initialData = {
    entry: "",
    vehicleType: "car",
    monthlyBudget: 375,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    birthDate: "",
    employmentStatus: "employed",
    monthlyIncome: 0,
  };

  const [formData, setFormData] = useState(initialData);
  const [activePage, setActivePage] = useState(1);

  const vehicleQty = 14;

  return (
    <div className='container'>
      <Box
        component='form'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        gap='15px'
        p='15px'
        borderRadius='16px'
        boxShadow='0 0 10px rgba(0, 0, 0, 0.15)'
        minHeight='400px'
        sx={{
          bgcolor: "white !important",
        }}
      >
        {activePage === 1 && (
          <Page1
            data={formData}
            setData={setFormData}
            setPage={setActivePage}
          />
        )}
        {activePage === 2 && (
          <Page2
            data={formData}
            setData={setFormData}
            setPage={setActivePage}
          />
        )}
        {activePage === 3 && (
          <Page3
            data={formData}
            setData={setFormData}
            qty={vehicleQty}
            setPage={setActivePage}
          />
        )}
        {activePage === 4 && (
          <Page4
            data={formData}
            setData={setFormData}
            setPage={setActivePage}
          />
        )}
        {activePage === 5 && <Page5 data={formData} setData={setFormData} />}
        <Footer page={activePage} setActivePage={setActivePage} />
      </Box>
    </div>
  );
};

export default App;
