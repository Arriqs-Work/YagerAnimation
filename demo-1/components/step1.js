import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

var step1Props = {
  clientProps: {
    clientName: "", 
    clientGender: "", 
    clientDOB: "", 
    clientEmploymentStatus: "", 
    clientEmploymentIncome: "", 
    clientOtherIncome: "", 
    clientNetWorth: "50", 
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


function EmploymentStatusSelect() {
  const [employmentStatus, setEmploymentStatus] = React.useState('');
  useEffect(() => {
    step1Props.clientProps.clientEmploymentStatus = employmentStatus;
    console.log(step1Props)
  })
  const handleChange = (event) => {
    setEmploymentStatus(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Employment Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={employmentStatus}
          label="Employment Status"
          onChange={handleChange}
        >
          <MenuItem value={'Employed'}>Employed</MenuItem>
          <MenuItem value={'Retired'}>Retired</MenuItem>
          <MenuItem value={'Business Owner'}>Business Owner</MenuItem>
          <MenuItem value={'Homemaker'}>Homemaker</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

function MaritalStatusSelect() {
  const [maritalStatus, setMaritalStatus] = React.useState('');
  useEffect(() => {
    step1Props.clientProps.clientMaritalStatus = maritalStatus;
    console.log(step1Props)
  })
  const handleChange = (event) => {
    setMaritalStatus(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={maritalStatus}
          label="Marital Status"
          onChange={handleChange}
        >
          <MenuItem value={'Single'}>Single</MenuItem>
          <MenuItem value={'Married'}>Married</MenuItem>
          <MenuItem value={'Widowed'}>Widowed</MenuItem>
          <MenuItem value={'Divorced'}>Divorced</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}



function RadioButtons() {
  const [gender, setGender] = React.useState('');

  useEffect(()=>{
    step1Props.clientProps.clientGender = gender;
    console.log(step1Props)
  })

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}} className="radio">
      <p>Gender:</p>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <p>Male</p>
      <Radio
        checked={gender === 'Male'}
        onChange={handleChange}
        value="Male"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Male' }}
      />
      <p>Female</p>
      <Radio
        checked={gender === 'Female'}
        onChange={handleChange}
        value="Female"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Female' }}
      /></div>
      <style>
        {`
        .radio {display: flex}
        `}
      </style>
    </div>

  );
}



function DiscreteSlider() {
  const marks = [
    {
      value: 0,
      label: '< $250k',
    },
    {
      value: 25,
      label: '$250k - $500k',
    },
    {
      value: 50,
      label: '$500k - $1M',
    },
    {
      value: 75,
      label: '$1M - $2M',
    },
    {
      value: 100,
      label: '> $2M',
    },
  ];
  
  function valuetext(value) {
    return value.toString();
  }

  const [netWorth, setNetWorth] = useState("50");

  useEffect(()=>{
    step1Props.clientProps.clientNetWorth = netWorth;
  })

  const handleChange = (e) => {
    let updatedNetWorth = e.target.ariaValueText;
    if (updatedNetWorth !== null || undefined) {
      setNetWorth(updatedNetWorth.toString());
    }
  }

  return (
    <div>
      <Typography id="discrete-slider-custom" gutterBottom>
        Net Worth
      </Typography>
      <Slider
        onChange={(e)=>{handleChange(e)}}
        defaultValue={50}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={25}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}

export default function Step1Fields() {

  return (
    <>
      <form noValidate autoComplete="off">
        <p>Name:</p>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <TextField id="outlined-basic" label="First" variant="outlined" />
          <TextField  label="Last" variant="outlined" />
        </div><br /><br />
        <RadioButtons />
        <p>Date of Birth:</p><TextField label="00/00/0000" variant="outlined" /><br /><br />
        <EmploymentStatusSelect /><br />
        <p>Employment Income (non-investment only):</p><TextField label="$" variant="outlined" /><br /><br />
        <p>Other Income:</p><TextField label="$" variant="outlined" /><br /><br />
        <DiscreteSlider /><br /><br />
        <MaritalStatusSelect /><br />
        <p>Social Security:</p><TextField label="000-00-0000" variant="outlined" /><br /><br />
      </form>
    </>
  );
}

