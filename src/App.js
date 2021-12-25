
import './App.css';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Hobbies from './Components/Hobbies';
import {Switch,Route} from 'react-router-dom';
import Head from './Components/Head';
function App() {
  return (
    <div>
   <Head/>
             <Switch>
         
         <Route exact path='/' component={Aboutme}/>
         <Route path='/skills' component={Skills}/>
         <Route path='/hobbies' component={Hobbies}/>
         

       </Switch>
       </div>
    
    
  );
}

export default App;
