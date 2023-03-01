import QuizLogo from '../../assets/quizlogo.png'

import TypingEffect from '../services/TypingEffect';
import StartButton from '../StartButton';

import { useNavigate } from 'react-router-dom';

function StartPage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/quiz-maker');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundImage: 'linear-gradient(115deg,#9F7AEA, #FEE2FE)' }}>
            <div className='shadow-lg flex flex-col items-center rounded-3xl bg-white p-20'>
                <div className='flex flex-col bg-gradient-to-r from-blue-800 to-red-500 text-transparent bg-clip-text animate-fade-in duration-1000'>
                    <div className="flex flex-col justify-center items-center text-5xl font-bold mb-6">
                        <p>Create Formulated Quizes with</p>
                        <p>QuizGPT Free Quiz Maker</p>
                    </div>
                </div>
                
                <img src={QuizLogo} alt="ChatGPT logo" className="w-20 h-20 mb-4" />
                <div className='text-2xl mb-6 font-bold text-gray-500'>
                <TypingEffect
                    texts={
                        [
                        'QuizGPT is a Free Online Quiz Maker with many Features that',
                        'Anyone can use to make a Formulated Quiz in Minutes.' ,
                        'I hope you enjoy your stay!', 
                        'Please come back soon!'
                        ]
                    }
                    speed={100}
                    delay={100000}
                    loop
                />
                </div>
                <div className=''>
                    <StartButton text="Make a Quiz Now!" onClick={() => handleClick()} />
                </div>
            </div>
        </div>
    );
}

export default StartPage