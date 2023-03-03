import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import StartPage from '../src/components/pages/StartPage'
import QuizMakerPage from '../src/components/pages/QuizMakerPage';
import SignupPage from '../src/components/pages/SignUpPage';
import LoginPage from '../src/components/pages/LoginPage';

function App() {
  return (
      <Routes>
        
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz-maker" element={<QuizMakerPage/>}/>
        <Route path='/signup-page' element={<SignupPage/>}/>
        <Route path='/login-page' element={<LoginPage/>}/>
        
      </Routes>
  );
}

export default App;