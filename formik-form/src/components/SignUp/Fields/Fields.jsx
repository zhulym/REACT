// libraries
import React from 'react';
// static
import FormControl from '../../shared/FormControl/FormControl';
// styles

const Fields = () => {
    return (
        <div className="fields">
            <FormControl
                type="text"
                name="name"
                placeholder="User Name"
                label="Name"
                id="registration__name"
                className="fields__item"
            />

            <FormControl
                type="text"
                name="lastName"
                placeholder="Last Name"
                label="Last name"
                id="registration__lastName"
                className="fields__item"
            />

            <FormControl
                type="email"
                name="email"
                placeholder="User Email"
                label="Your email"
                id="registration__email"
                className="fields__item"
            />

            <FormControl
                type="password"
                name="password"
                placeholder="Password"
                label="Enter password"
                id="registration__password"
                className="fields__item"
            />

            <button type="submit">Submit</button>
        </div>
    );
};

export default Fields;