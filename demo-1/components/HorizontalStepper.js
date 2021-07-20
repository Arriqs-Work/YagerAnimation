import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

let step1Props = {
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


function RetirementExpectationsCheckboxes() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Active Lifestyle" />
      <FormControlLabel control={<Checkbox />} label="Quiet Lifestyle" />
      <FormControlLabel control={<Checkbox />} label="Opportunity to Help Others" />
      <FormControlLabel control={<Checkbox />} label="Moving to a New Home" />
      <FormControlLabel control={<Checkbox />} label="Work by Choice" />
      <FormControlLabel control={<Checkbox />} label="Time to Travel" />
      <FormControlLabel control={<Checkbox />} label="Start a Business" />
      <FormControlLabel control={<Checkbox />} label="Time with Friends &amp; Family" />
      <FormControlLabel control={<Checkbox />} label="Less Stress" />
    </FormGroup>
  );
}

function MoneyConcernsCheckboxes() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Not Having a Paycheck" />
      <FormControlLabel control={<Checkbox />} label="Running Out of Money" />
      <FormControlLabel control={<Checkbox />} label="Suffering Investment Losses" />
      <FormControlLabel control={<Checkbox />} label="Leaving Money to Others" />
    </FormGroup>
  );
}
function HealthConcernsCheckboxes() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Cost of Health Care" />
      <FormControlLabel control={<Checkbox />} label="Current or Future Health Issues" />
      <FormControlLabel control={<Checkbox />} label="Dying Early" />
      <FormControlLabel control={<Checkbox />} label="Living Too Long" />
      <FormControlLabel control={<Checkbox />} label="Getting Ill" />
    </FormGroup>
  );
}

function FamilyConcernsCheckboxes() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Being Bored" />
      <FormControlLabel control={<Checkbox />} label="Parents Needing Care" />
    </FormGroup>
  );
}


function fetchPdf() {
  
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
          <MenuItem value={10}>Employed</MenuItem>
          <MenuItem value={20}>Retired</MenuItem>
          <MenuItem value={30}>Business Owner</MenuItem>
          <MenuItem value={40}>Homemaker</MenuItem>
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
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}} className="radio">
      <p>Gender:</p>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <p>Male</p>
      <Radio
        checked={selectedValue === 'Male'}
        onChange={handleChange}
        value="Male"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Male' }}
      />
      <p>Female</p>
      <Radio
        checked={selectedValue === 'Female'}
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
  return `$${value}`;
}

function DiscreteSlider() {

  return (
    <div>
      <Typography id="discrete-slider-custom" gutterBottom>
        Net Worth
      </Typography>
      <Slider
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

function Step1Fields() {

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

function Step2Fields() {

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

function Step3Fields() {

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

function getSteps() {
  return ['Personal Information', 'Children & Grandchildren', 'Expectations & Concerns'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1Fields />;
    case 1:
      return <Step2Fields />;
    case 2:
      return <Step3Fields />;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={fetchPdf}>Download my pdf</Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
