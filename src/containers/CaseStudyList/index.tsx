import React from 'react';

const CaseStudyList = () => {
  return (
    <div id="container">
      <h1>Case Study List</h1>
      <NumberList />
    </div>
  );
}

export default CaseStudyList;


function NumberList() {
  const listItems = [1, 2, 3, 4, 5, 6, 7].map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}