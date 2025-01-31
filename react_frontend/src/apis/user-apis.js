import axios from 'axios';

export async function fetchAll()
{
  try 
  {
     const response = await axios.get('http://localhost:5000/users');
     return response.data.users_list;    
  }
  catch (error)
  {
     //We're not handling errors. Just logging into the console.
     console.log(error); 
     return false;         
  }
}

export async function makePostCall(user)
{
    try
    {
        const response = await axios.post('http://localhost:5000/users', user);
        return response;
    }
    catch(error)
    {
        console.log(error); 
        return false;  
    }
}

export async function makeDeleteIdCall(id)
{
    try
    {
        const response = await axios.delete(`http://localhost:5000/users/${id}`);
        return response;
    }
    catch(error)
    {
        console.log(error); 
        return false;  
    }
}