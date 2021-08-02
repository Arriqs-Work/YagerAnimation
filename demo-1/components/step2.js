import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';


var step2Props = [
  {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    age: "",
    relationship: ""
  },
]


export default function Step2Fields() {
  const [childrenProps, setChildrenProps] = React.useState([
    {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      age: "",
      relationship: ""
    },
  ]);

  
  const {firstName, lastName, dateOfBirth, age, relationship} = childrenProps;


  const handleChange = (event, key) => {
    let children = childrenProps;
    switch (key) {
      case 0:
        children.splice(key, 1, {firstName: event.target.value});
        break
      case 1:
        children.splice(key, 1, {lastName: event.target.value});
        break      
      case 2:
        children.splice(key, 1, {dateOfBirth: event.target.value});
        break
      case 3:
        children.splice(key, 1, {age: event.target.value});
        break
      case 4:
        children.splice(key, 1, {relationship: event.target.value});
        break
    }


    setChildrenProps(children);
    console.log("Children:")
    console.log(children)
    step2Props = childrenProps;
    console.log("Updated Step 2 Props:")
    console.log(step2Props)
  };
  return (
    <>
      <form noValidate autoComplete="off">
        <p>Name:</p><TextField onChange={(e) => handleChange(e, 0)} id="outlined-basic" label="First" variant="outlined" />
        <TextField onChange={(e) => handleChange(e, 1)}  label="Last" variant="outlined" /><br /><br />
        <p>Date of Birth:</p><TextField onChange={(e) => handleChange(e, 2)} label="00/00/0000" variant="outlined" /><br /><br />
        <p>Age:</p><TextField onChange={(e) => handleChange(e, 3)} label="Age" variant="outlined" /><br /><br />
        <p>Relationship:</p><TextField onChange={(e) => handleChange(e, 4)} label="Relationship" variant="outlined" /><br /><br />
      </form>
    </>
  );
}
