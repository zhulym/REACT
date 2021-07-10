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
                id="login__name"
                className="fields__item"
            />

            <FormControl
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                id="login__password"
                className="fields__item"
            />

            <button type="submit">Submit</button>
        </div>
    );
};

export default Fields;