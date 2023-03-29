import React from "react";
import Card from './Card'
import Button from "./Button";
import classes from './ErrorModel.module.css';

const ErrorModul = props =>{
    return (
        <div>
            <div className={classes.backdrop} 
               onClick={props.onConform} />
            <Card className={classes.modal}>

            <header className={classes.header}>
                 <h2>{props.title}</h2>
            </header>

            <div className={classes.content}>
                  <p>{props.message}</p>
            </div>

            <footer className={classes.actions}>
                  <Button onClick={props.onConform}>Okay</Button>
            </footer>

        </Card>
        </div>
    )
}
export default ErrorModul;