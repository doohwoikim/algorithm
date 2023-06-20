import React, { useState } from 'react';

function PersonCard(props) {
    const { firstName, lastName, hairColor } = props;
    const [age, setAge] = useState(props.age);

    const increaseAge = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <h3>Age: {age}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick={increaseAge}>Birthday Button for {firstName}, {lastName}</button>
        </div>
    );
}

export default PersonCard;
