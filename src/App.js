import './App.css';
import HomePage from './pages/HomePage';
import AddEmployeePage from './pages/AddEmployeePage';
import {Routes, Route} from 'react-router-dom';
import EmployeeListPage from './pages/EmployeeListPage';
import { EmployeeProvider } from './EmployeeAppContext';
import { ThemeProvider, createGlobalStyle } from 'styled-components';



//functional component
//class component
//PascalCasing
//props is short for "properties", we use it to pass data from parent to child component and also pass functions.
//props are objects and they are read-only

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const theme = {
  primary: "#2196F3",
  secondary: "green",
  primaryHeaderFontSize: "68",
  paragraphFontSize: "24",
  mobile: "768",
  tablet: "992",
  labtop: "1022",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add-employee" element={<AddEmployeePage />} />
          <Route path="/employee-list" element={< EmployeeListPage />} />
        </Routes>
      </EmployeeProvider>
    </ThemeProvider>
  );
}

export default App;
