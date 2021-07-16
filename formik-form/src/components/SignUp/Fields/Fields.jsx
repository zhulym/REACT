// libraries
import React from 'react';
import { ButtonToggle } from 'reactstrap';
// static
import FormControl from '../../shared/FormControl/FormControl';
import { usaStates } from '../../../constants/constants';
import SelectField from '../../shared/SelectField/index';
// styles

const Fields = props => {
  return (
    <div className="fields">
      <FormControl
        {...props}
        type="text"
        name="name"
        placeholder="User Name"
        label="Name"
        id="registration__name"
        autocomplete="off"
      />
      <FormControl
        {...props}
        type="text"
        name="lastName"
        placeholder="Last Name"
        label="Last name"
        id="registration__lastName"
        autocomplete="off"
      />
      <FormControl
        {...props}
        type="text"
        name="email"
        placeholder="User Email"
        label="Email"
        id="registration__email"
        autocomplete="off"
      />
      <FormControl
        {...props}
        type="text"
        name="address"
        placeholder="User Address"
        label="Address"
        id="registration__address"
        autocomplete="off"
      />
      <FormControl
        {...props}
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
        id="registration__password"
      />
      <SelectField
        label="Country"
        className="form-label form-label-country"
        id="form-select-country"
        selectClassName="form-select form-select-custom"
        name="country"
        aria-label="Disabled select example"
        disabled
      >
        <option>USA</option>
      </SelectField>
      <SelectField
        {...props}
        label="State"
        className="form-label form-label-state"
        selectClassName="form-select form-select-custom"
        id="form-select-state"
        name="state"
        aria-label="Default select example"
        stateCallBack={props.stateCallBack}
      >
        <option selected>Your State</option>
        {usaStates.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </SelectField>
      <FormControl {...props} type="text" name="zip" placeholder="Zip" label="Zip code" id="registration__zip" />
      <FormControl {...props} type="checkbox" name="checkbox" id="registration__conditions">
        <span className="registration__terms">I accept the terms and conditions</span>
      </FormControl>
      <ButtonToggle type="submit" color="success">
        Submit
      </ButtonToggle>{' '}
    </div>
  );
};

export default Fields;
