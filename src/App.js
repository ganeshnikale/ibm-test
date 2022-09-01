
import React, { useState } from 'react';
import './App.css';

function App() {

  let innitialState = [
    {
      name: "emp1",
      salary: 1000,
      designation: "Developer"
    }, {
      name: "emp2",
      salary: 2000,
      designation: "Tester"
    }, {
      name: "emp3",
      salary: 3000,
      designation: "Manager"
    }, {
      name: "emp4",
      salary: 1000,
      designation: "Developer"
    }
    ];


    const [value, setValue] = useState(innitialState);

    
  return (
    <div className="App">
<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Salary</th>
    <th>Designation</th>
  </tr>
</thead>
      {
        value.map((emp, index) => {
          return (<tr key={index}>
            <td>{emp.name}</td>
            <td>{emp.salary}</td>
            <td>{emp.designation}</td>
          </tr>)
        })
      }
</table>

     
    </div>
  );
}

export default App;
