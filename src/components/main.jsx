import { Route, Routes } from 'react-router-dom';
import Start from './main/start';
import Questions from './main/questions';
import Win from './main/win';
import Lost from './main/lost';

const Main = (props) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Start {...props}/>}/>
                <Route path='/questions' element={<Questions {...props}/>}/>
                <Route path='/win' element={<Win {...props}/>}/>
                <Route path='/lost' element={<Lost {...props}/>}/>
            </Routes> 
        </div>
    );
}

export default Main;
