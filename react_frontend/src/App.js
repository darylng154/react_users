import './App.css';
import { VerifiedUser } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import Form from './components/Form/Form';

import * as userAPIs from './apis/user-apis';


function App() {
  const [characters, setCharacters] = useState([/*empty Table*/]);

  useEffect(() => 
  {
    userAPIs.fetchAll().then( result => 
    {
       if (result)
          setCharacters(result);
    });
 }, [] );


  return (
    <div class = "flex flex-grow justify-center">
      <div class = "fixed bottom-4 right-4">
        <VerifiedUser/>
      </div>

      <div class = "">
        <Form handleSubmit = {updateUserList} handleDelete = {deleteUserFromList}/>
      </div>
    </div>
  );

  function updateUserList(user)
  {
    userAPIs.makePostCall(user).then( result => 
    {
      if(result && result.status === 201)
      {
        setCharacters([...characters, result.data]);
      }
    });
  }

  function deleteUserFromList(user)
  {
    userAPIs.makePostCall(user).then( result => 
    {
      if(result && result.status === 201)
      {
        console.log(result.data);
        setCharacters([result.data]);
      }
    });
  }
}

function alertSubmition()
{
  alert("Form is Submitting Prop");
}

export default App;
