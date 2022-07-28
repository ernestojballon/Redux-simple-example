import React from "react";

const ListOfNumbers = (props) => {
  const { numbers } = props;
// [1,2,3,4,5,6]
  const myNumbers = numbers.map((number,index) => (
    <div key={number+index}>{number}</div>
  ))

  return (
    <div>
      <h1>List of numbers</h1>
      <ul>
        {myNumbers}
      </ul>
    </div>
  );
}

export default ListOfNumbers;