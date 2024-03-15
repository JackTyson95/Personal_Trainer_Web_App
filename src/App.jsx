import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import GuestLayout from './layouts/GuestLayout';
import { Routes, Route } from "react-router-dom"
import ExerciseConfigurator from "./pages/ExerciseConfigurator"
import ExerciseSuggester from './pages/ExerciseSuggester';

// Creating a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
  fontFamily: 'Arial',
},
});

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<ExerciseSuggester />} />
          <Route path="/suggester" element={<ExerciseSuggester />}/>
          <Route path="/configure-exercise" element={<ExerciseConfigurator />} />
          <Route path="/exercise" element={<ExerciseConfigurator />}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;


