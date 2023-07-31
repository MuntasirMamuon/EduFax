import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div>
                <div>
                   <label></label>
                    <input type="text" />
                </div>
                <div>
                    <label> Email*</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password*</label>
                    <input type="number" />
                </div>
                <div>
                    <label >Confirm Password*</label>
                    <input type="text" />
                </div>
                <input type="submit" value="Sign Up"  />
            </div>
        </div>
    );
};

export default SignUp;