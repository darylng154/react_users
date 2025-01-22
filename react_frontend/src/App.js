import './App.css';
import { VerifiedUser } from '@mui/icons-material';
import Form from './components/Form/Form';

function App() {
  return (
    <div class = "flex flex-grow justify-center">
      <div class = "fixed bottom-4 right-4">
        <VerifiedUser/>
      </div>

      <div class = "">
        <Form handleSubmit = {alertSubmition}/>
      </div>
    </div>
  );
}

function alertSubmition()
{
  alert("Form is Submitting Prop")
}

export default App;
