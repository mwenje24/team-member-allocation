import React, {useState} from 'react'
import nick from './images/nick2.png'
import judy from './images/judy.png'

function Employees() {
    const [employees, setEmployees] = useState([
        {
            id:1,
            fullname: "Andrew Tate",
            designation: "Node Developer",
            gender: "male",
            team: "TeamA"
        },
        {
            id:1,
            fullname: "Kelly Zee",
            designation: "React Developer",
            gender: "female",
            team: "TeamA"
        },
        {
            id:1,
            fullname: "Mwenje David",
            designation: "Ruby Developer",
            gender: "male",
            team: "TeamC"
        },
        {
            id:1,
            fullname: "Ben Johnson",
            designation: "Ruby Developer",
            gender: "male",
            team: "TeamB"
        },
        {
            id:1,
            fullname: "Anne Solomon",
            designation: "Django Developer",
            gender: "female",
            team: "TeamC"
        },

    ])
  return (
    <div className='container'>
        <div className="row justify-content-center">
            {
                employees.map((employee) =>(
                    <div style={{cursor:'pointer'}} id={employee.id} className='col-3 m-1 border shadow'>
                        {/* style={{width:'100px', height:'auto'}} */}
                        <img className='card-img-top' src={employee.gender === 'male' ? nick : judy} alt="." />
                        <div className="card-body">
                            <p className='card-title'>Full name: {employee.fullname}</p>
                            <p className='card-text'>Designation: {employee.designation}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Employees
