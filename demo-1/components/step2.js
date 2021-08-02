import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';


let step2Props = {
  clientProps: {
    clientName: "", 
    clientGender: "", 
    clientDOB: "", 
    clientEmploymentStatus: "", 
    clientEmploymentIncome: "", 
    clientOtherIncome: "", 
    clientNetWorth: "", 
    clientMaritalStatus: "", 
    clientSocialSecurity: "", 
  },
  coClientProps: {
    coClientName: "",
    coClientGender: "",
    coClientDOB: "",
    coClientEmploymentStatus: "",
    coClientEmploymentIncome: "",
    coClientOtherIncome: "",
    coClientNetWorth: "",
    coClientMaritalStatus: "",
    coClientSocialSecurity: ""
  }
}


export default function Step2Fields() {

  return (
    <>
      <form noValidate autoComplete="off">
        <p>Name:</p><TextField id="outlined-basic" label="First" variant="outlined" />
        <TextField  label="Last" variant="outlined" /><br /><br />
        <p>Date of Birth:</p><TextField label="00/00/0000" variant="outlined" /><br /><br />
        <p>Age:</p><TextField label="Age" variant="outlined" /><br /><br />
        <p>Relationship:</p><TextField label="Relationship" variant="outlined" /><br /><br />
      </form>
    </>
  );
}
