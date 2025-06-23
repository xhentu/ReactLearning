import React from 'react';

const PropTest = (prop) => {
    return (
        <div>
            <p>Hello, {prop.name}!</p>
        </div>
    )
}

export default PropTest;
// This component takes a prop called 'name' and displays a greeting message using that name.