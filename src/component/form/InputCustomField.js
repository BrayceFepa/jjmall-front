import React from 'react';
import Label from '@component/form/Label';
import Input from 'react-phone-number-input/input'
// import PhoneInput from 'react-phone-number-input'
import { transparent } from 'tailwindcss/colors';

import PhoneInput,{ isValidPhoneNumber }  from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useForm, Controller} from "react-hook-form";

const InputPhoneNumber = ({
  register,
  name,
  label,
  placeholder,
  Icon,
  id,
  international=true,
  withCountryCallingCode=true,
  country,
  setValue,
  value,
  onChange,
}) => {
  const {control} = useForm();
  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{' '}
            </span>
          </div>
        )}
        {/* <PhoneInput
          {...register(`${name}`, {
            required: `${label} is required!`,
          })}
          style={{borderWidth:1.5,borderRadius:5}}
          inputStyle={{width:"100%",borderWidth:1}}
          defaultCountry={country}
          international={international}
          withCountryCallingCode={withCountryCallingCode}
          id={id}

          placeholder={placeholder}
          country={country}
          value={value}
          onChange={setValue}
          
          name={name}
          
        /> */}

            <PhoneInput
              {...register(`${name}`)}
              inputStyle={{width:"100%",height:45}}
              // inputProps={{
              //   name: {name},
              // }}
              id={id}
              placeholder={placeholder}
              country={country}
              value={value}
              onChange={setValue}
              name={name}
            />

      </div>
    </>
  );
};

const InputPerso = ({
  register,
  name,
  label,
  type,
  placeholder,
  Icon,
  id,

}) => {
  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{' '}
            </span>
          </div>
        )}
        <input
          {...register(`${name}`)}
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          className={
            Icon
              ? 'py-2 pl-10 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12'
              : 'py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12'
          }
        />
      </div>
    </>
  );
};
export {InputPhoneNumber,InputPerso};
