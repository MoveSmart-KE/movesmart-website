import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import LandingPage from "./LandingPage"

function PageRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default PageRouter