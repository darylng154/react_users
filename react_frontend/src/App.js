import './App.css';
import { VerifiedUser } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import _ from 'lodash';

import * as userAPIs from './apis/user-apis';


function App() {
  const [userList, setUserList] = useState([/*empty Table*/]);

  useEffect(() => 
  {
    userAPIs.fetchAll().then( result => 
    {
      debugger;
       if (result)
        setUserList(result);
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
        setUserList([...userList, result.data]);
      }
    });
  }

  function deleteUserFromList(user)
  {
    userAPIs.makeDeleteIdCall(user._id).then( result => 
    {
      if(result && result.status === 204)
      {
        const updatedList = userList.filter((usersInList) => 
        {
          return usersInList._id !== parseInt(user._id);
        });

        setUserList(updatedList);
      }
    });
  }
}

function alertSubmition()
{
  alert("Form is Submitting Prop");
}

export default App;
