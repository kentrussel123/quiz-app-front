import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import StartPage from '../src/components/pages/StartPage'
import QuizMakerPage from '../src/components/pages/QuizMakerPage';
import SignupPage from '../src/components/pages/SignUpPage';

function App() {
  return (
      <Routes>
        
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz-maker" element={<QuizMakerPage/>}/>
        <Route path='/signup-page' element={<SignupPage/>}/>
        
      </Routes>
  );
}

export default App;