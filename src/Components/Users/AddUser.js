import React,{useState} from "react";

import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModul from "../UI/ErrorModul";

import classes from './AddUser.module.css';

const AddUser = props =>{

       const[eneredUserName,setEnterdeName]=useState('');
       const[eneredAge,setAge]=useState('');
       const [error, setError] =useState();


    const Submithandler = (event) => {
        event.preventDefault();
        if(eneredUserName.trim().length === 0 || eneredAge.trim().length === 0){
          setError ({
            title: 'Invalid Input',
            message: 'Please Enter a valid name  and age (non-empty value).'
          })
          return;
        }
        if(eneredAge < 1){
          setError ({
            title: 'Invalid age',
            message: 'Please Enter a valid age  and age (> 0).'
          })
            return;
        }

         props.onAddUser(eneredUserName,eneredAge);
        setEnterdeName('')
        setAge('')
     } 

     const changeEnterUserName = (event)=>{
       setEnterdeName(event.target.value);
       }
       
     const changeEnterAge = (event)=>{
        setAge(event.target.value);
      }
      
      const errorHandler = () =>{
        setError(null);
      }


    return(
     <div>
        {error && (
        <ErrorModul 
        title={error.title}
        message={error.message}
        onConform={errorHandler} />
       )}     
   
    <Card key="add-user-card"
    className={classes.input}>

    <form onSubmit={Submithandler}>

        <label htmlFor="username">Username</label>
        <input type="text" 
         id="username" value={eneredUserName}
         onChange={changeEnterUserName}/>

        <label htmlFor="age">Age (years)</label>

        <input type="number"
         id="age" value={eneredAge}
         onChange={changeEnterAge}/>

        <Button type="submit">Add User</Button>

    </form>
    </Card>
    </div>
    )
}

export default AddUser;