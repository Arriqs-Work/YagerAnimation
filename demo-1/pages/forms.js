import React from 'react';
import { useForm } from 'react-hook-form';
import Select from '@material-ui/core/Select';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div>
      <form className="ssBenefits" onSubmit={handleSubmit(onSubmit)}>

        <input {...register} type="radio" value="Yes" />
        <input {...register} type="radio" value="No" />
        <input {...register} type="radio" value="Receiving Now" />
        <input type="number" placeholder="benefitAmt" {...register("benefitAmt", {})} />

        <input {...register} type="radio" value="Yes" />
        <input {...register} type="radio" value=" No" />
        <input type="number" placeholder="primaryInsuranceAmt" {...register("primaryInsuranceAmt", {})} />

        <input type="submit" />

      </form>
      <style>
        {`
          .ssBenefits {
            font: 112.5%/1.45em sans-serif;
            -webkit-text-size-adjust: 100%;
            --color-secondary: #bf1650;
            --color-light-pink: #ec5990;
            --color-primary: #0e101c;
            --color-blue: #1e2a4a;
            --color-button-blue: #191d3a;
            --color-light-blue: #516391;
            --color-link: #ff7aa8;
            --color-medium-blue: #4f6294;
            --color-black: #2d2d2d;
            --color-purple: #0f111b;
            --color-grey: #333;
            --color-light-grey: #ccc;
            color: #fff;
            font-weight: 400;
            word-wrap: break-word;
            font-kerning: normal;
            font-family: Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            -webkit-font-smoothing: antialiased;
            box-sizing: inherit;
            flex: 1 1;
          }
        `}
      </style>
    </div>
    
  );
}
