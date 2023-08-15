import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import MainPage from "./components/MainPage";
import {NotFound} from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
