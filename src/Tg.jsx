import React from 'react';

const Tg = (props) => {
    const {name, contents} = props;
  return (
    <div>
      <h1>Tg name is {name}</h1>
      <p>{contents}</p>
    </div>
  );
};

export default Tg;