import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


var step3Props = {
  clientProps: {
    retirementExpectations: {}, 
    moneyConcerns: {},
    healthConcerns: {},
    familyConcerns: {},
    otherConcerns: {}
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


function RetirementExpectationsCheckboxes() {

    const [retirementExpectations, setRetirementExpectations] = React.useState([
    {activeLifestyle: false},
    {quietLifestyle: false},
    {helpOthers: false},
    {moving: false},
    {workByChoice: false},
    {timetoTravel: false},
    {startBusiness: false},
    {timeWithFriends: false},
    {lessStress: false}
    ]);
  
  const {activeLifestyle, quietLifestyle, helpOthers, moving, workByChoice, timetoTravel, startBusiness, timeWithFriends, lessStress} = retirementExpectations;


  const handleChange = (event, key) => {
    let expectations = retirementExpectations;
    switch (key) {
      case 0:
        expectations.splice(key, 1, {activeLifestyle: event.target.checked});
        break
      case 1:
        expectations.splice(key, 1, {quietLifestyle: event.target.checked});
        break      
      case 2:
        expectations.splice(key, 1, {helpOthers: event.target.checked});
        break
      case 3:
        expectations.splice(key, 1, {moving: event.target.checked});
        break
      case 4:
        expectations.splice(key, 1, {workByChoice: event.target.checked});
        break
      case 5:
        expectations.splice(key, 1, {timetoTravel: event.target.checked});
        break
      case 6:
        expectations.splice(key, 1, {startBusiness: event.target.checked});
      break
      case 7:
        expectations.splice(key, 1, {timeWithFriends: event.target.checked});
        break
      case 8:
        expectations.splice(key, 1, {lessStress: event.target.checked});
        break
      
    }

    setRetirementExpectations(expectations);
    console.log("expectations:");
    console.log(retirementExpectations)
    step3Props.clientProps.retirementExpectations = retirementExpectations;
    console.log("Step 3 Props:")
    console.log(step3Props)
  };

  return (
    <FormGroup>
      <FormControlLabel onChange={(e)=> handleChange(e, 0)} control={<Checkbox />} label="Active Lifestyle" />
      <FormControlLabel onChange={(e)=> handleChange(e, 1)} control={<Checkbox />} label="Quiet Lifestyle" />
      <FormControlLabel onChange={(e)=> handleChange(e, 2)} control={<Checkbox />} label="Opportunity to Help Others" />
      <FormControlLabel onChange={(e)=> handleChange(e, 3)} control={<Checkbox />} label="Moving to a New Home" />
      <FormControlLabel onChange={(e)=> handleChange(e, 4)} control={<Checkbox />} label="Work by Choice" />
      <FormControlLabel onChange={(e)=> handleChange(e, 5)} control={<Checkbox />} label="Time to Travel" />
      <FormControlLabel onChange={(e)=> handleChange(e, 6)} control={<Checkbox />} label="Start a Business" />
      <FormControlLabel onChange={(e)=> handleChange(e, 7)} control={<Checkbox />} label="Time with Friends &amp; Family" />
      <FormControlLabel onChange={(e)=> handleChange(e, 8)} control={<Checkbox />} label="Less Stress" />
    </FormGroup>
  );
}

function MoneyConcernsCheckboxes() {
  const [moneyConcerns, setMoneyConcerns] = React.useState([
    {noPaycheck: false},
    {runningOut: false},
    {investmentLosses: false},
    {leavingMoney: false}
  ]);
  
  const { noPaycheck, runningOut, investmentLosses, leavingMoney } = moneyConcerns;


  const handleChange = (event, key) => {
    let concerns = moneyConcerns;
    switch (key) {
      case 0:
        concerns.splice(key, 1, {noPaycheck: event.target.checked});
        break
      case 1:
        concerns.splice(key, 1, {runningOut: event.target.checked});
        break      
      case 2:
        concerns.splice(key, 1, {investmentLosses: event.target.checked});
        break
      case 3:
        concerns.splice(key, 1, {leavingMoney: event.target.checked});
        break
    }

    setMoneyConcerns(concerns);
    console.log("concerns:");
    console.log(moneyConcerns)
    step3Props.clientProps.moneyConcerns = moneyConcerns;
    console.log('Money Concerns - Updated Step3Props');
    console.log(step3Props)
  };
  return (
    <FormGroup>
      <FormControlLabel onChange={(e)=> handleChange(e, 0)} control={<Checkbox />} label="Not Having a Paycheck" />
      <FormControlLabel onChange={(e)=> handleChange(e, 1)} control={<Checkbox />} label="Running Out of Money" />
      <FormControlLabel onChange={(e)=> handleChange(e, 2)} control={<Checkbox />} label="Suffering Investment Losses" />
      <FormControlLabel onChange={(e)=> handleChange(e, 3)} control={<Checkbox />} label="Leaving Money to Others" />
    </FormGroup>
  );
}
function HealthConcernsCheckboxes() {
  const [healthConcerns, setHealthConcerns] = React.useState([
    {cost: false},
    {issues: false},
    {dyingEarly: false},
    {livingTooLong: false},
    {gettingIll: false}
  ]);
  
  const { cost, issues, dyingEarly, livingTooLong, gettingIll } = healthConcerns;


  const handleChange = (event, key) => {
    let concerns = healthConcerns;
    switch (key) {
      case 0:
        concerns.splice(key, 1, {cost: event.target.checked});
        break
      case 1:
        concerns.splice(key, 1, {issues: event.target.checked});
        break      
      case 2:
        concerns.splice(key, 1, {dyingEarly: event.target.checked});
        break
      case 3:
        concerns.splice(key, 1, {livingTooLong: event.target.checked});
        break
      case 4:
        concerns.splice(key, {gettingIll: event.target.checked})
    }

    setHealthConcerns(concerns);
    console.log("concerns:");
    console.log(healthConcerns)
    step3Props.clientProps.healthConcerns = healthConcerns;
    console.log('Health Concerns - Updated Step3Props');
    console.log(step3Props)
  };
  return (
    <FormGroup>
      <FormControlLabel onChange={(e)=> handleChange(e, 0)} control={<Checkbox />} label="Cost of Health Care" />
      <FormControlLabel onChange={(e)=> handleChange(e, 1)} control={<Checkbox />} label="Current or Future Health Issues" />
      <FormControlLabel onChange={(e)=> handleChange(e, 2)} control={<Checkbox />} label="Dying Early" />
      <FormControlLabel onChange={(e)=> handleChange(e, 3)} control={<Checkbox />} label="Living Too Long" />
      <FormControlLabel onChange={(e)=> handleChange(e, 4)} control={<Checkbox />} label="Getting Ill" />
    </FormGroup>
  );
}

function FamilyConcernsCheckboxes() {
  const [familyConcerns, setFamilyConcerns] = React.useState([
    {bored: false},
    {parentCare: false}
  ]);
  
  const { bored, parentCare } = familyConcerns;


  const handleChange = (event, key) => {
    let concerns = familyConcerns;
    switch (key) {
      case 0:
        concerns.splice(key, 1, {bored: event.target.checked});
        break
      case 1:
        concerns.splice(key, 1, {parentCare: event.target.checked});
        break
    }

    setFamilyConcerns(concerns);
    console.log("concerns:");
    console.log(familyConcerns)
    step3Props.clientProps.familyConcerns = familyConcerns;
    console.log('Health Concerns - Updated Step3Props');
    console.log(step3Props)
  };
  return (
    <FormGroup>
      <FormControlLabel onChange={(e)=> handleChange(e, 0)} control={<Checkbox />} label="Being Bored" />
      <FormControlLabel onChange={(e)=> handleChange(e, 1)} control={<Checkbox />} label="Parents Needing Care" />
    </FormGroup>
  );
}


export default function Step3Fields() {

  return (
    <>
      <div className="top5Concerns">
        <h3>Top Five Concerns in Retirement:</h3>
          <ol>
            <li>Running out of money</li>
            <li>Cost of health care or long-term care</li>
            <li>Suffering investment losses</li>
            <li>Current or future health issues</li>
            <li>Not having a paycheck</li>
          </ol>
      </div>

      <h2>What do you most look forward to? What concerns you? Select all that applies to you.</h2>
      <div className="concernsContainer">
        <div>
          <h3>Retirement Expectations</h3>
          <form noValidate autoComplete="off">
            <RetirementExpectationsCheckboxes />
          </form>
        </div>
        <div>
          <h3>Retirement Concerns</h3>
          <h4>Money Concerns</h4>
          <form noValidate autoComplete="off">
            <MoneyConcernsCheckboxes />
          </form>
          <h4>Health Concerns</h4>
          <form noValidate autoComplete="off">
            <HealthConcernsCheckboxes />
          </form>
        </div>
        <div className='familyConcerns'>
          <h4>Personal & Family Concerns</h4>
          <form noValidate autoComplete="off">
            <FamilyConcernsCheckboxes />
          </form>
          <h4>Something Else/Other Concerns</h4>
          <form noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Other Concerns" variant="outlined" />
          </form>
        </div>
      </div>
      <style>
        {`
          .top5Concerns {
            display: flex;
            flex-direction: column;
            align-items: center
          }
          .concernsContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            column-gap: 2rem
          }
          ol {
            text-align: center;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 70%;
            padding: 0
          }
          li {
            margin-left: 2rem;
          }

          p {
            text-align: center;
          }

          .familyConcerns {
            margin-top: 3rem
          }
        `}
      </style>
    </>
  );
}
