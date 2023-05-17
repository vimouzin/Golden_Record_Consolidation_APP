
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./Compontents/NavBar";
import './css/expand.css'
import {SubMenu} from './Compontents/SubMenu'
import {InputTransformation} from './Compontents/InputTransformation'
import './css/submenu.css'
import {DropDownPage} from './Compontents/DropDownPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  // Example data
 
 
  const queryClient = new QueryClient();
  // Render the app
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      
    
      <SubMenu></SubMenu>
      <Router>
        <Routes>
        <Route path="/" element={<InputTransformation/>} />
        <Route path="/dropdown" element={<DropDownPage/>} />
        </Routes>
      </Router>     
    </QueryClientProvider>
  );
}

export default App;
