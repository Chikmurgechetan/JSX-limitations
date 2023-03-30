import React,{useState,useRef} from "react";
import Wraper from "../Helper/Wraper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModul from "../UI/ErrorModul";
import classes from './AddUser.module.css';

const AddUser = props =>{
         const nameInputRef= useRef();
         const ageInputRef= useRef();
         const collegeInputRef =useRef();

      
       const [error, setError] =useState();


    const Submithandler = (event) => {
        event.preventDefault();
       const enteredName = nameInputRef.current.value;
       const enteredUserAge = ageInputRef.current.value;
       const enteredCollege = collegeInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 ){
          setError ({
            title: 'Invalid Input',
            message: 'Please Enter a valid name ,age and College Name (non-empty value).'
          })
          return;
        }
        if(+enteredUserAge < 1){
          setError ({
            title: 'Invalid age',
            message: 'Please Enter a valid age  and age (> 0).'
          })
            return;
        }
        if(enteredCollege.trim().length === 0){
          setError ({
            title:'Invalid Input',
            message: 'Please Enter a College Name'
          })
          return;
        }

         props.onAddUser(enteredName,enteredUserAge,enteredCollege);

         nameInputRef.current.value = '';
         ageInputRef.current.value = '';
         collegeInputRef.current.value = '';
       
     } 

     
      
      const errorHandler = () =>{
        setError(null);
      }


    return(
     <Wraper>
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
         id="username" 
         ref={nameInputRef}
         />

        <label htmlFor="age">Age (years)</label>

        <input type="number"
         id="age" 
         ref={ageInputRef}
         />
         <label htmlFor="college">College</label>
         <input type="text"
         id="college"
         ref={collegeInputRef}
         />

        <Button type="submit">Add User</Button>

    </form>
    </Card>
    </Wraper>
    )
}

export default AddUser;