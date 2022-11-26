import React, {useState} from 'react'
import nick from './images/nick2.png'
import judy from './images/judy.png'

function Employees() {
    const [selectedteam, setSelectedTeam] = useState('TeamA');
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
    function handleEmployeeCardClick(e){
        const transformEmployee = employees.map((employee) => 
        employee.id === parseInt(e.currentTarget.id)?
        ((employee.team === selectedteam)?
        {...employee, team:''}:{...employee, team:selectedteam}):employee
        );
        setEmployees(transformEmployee);
    }
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-6">
                <select className='form-select form-select-sm' 
                    value={selectedteam} 
                    onChange={(e) => setSelectedTeam(e.target.value)}>
                    <option value='TeamA'>TeamA</option>
                    <option value='TeamB'>TeamB</option>
                    <option value='TeamC'>TeamC</option>
                </select>
            </div>
        </div>
        <div className="row justify-content-center">
            {
                employees.map((employee, index) =>(
                    <div style={{cursor:'pointer'}} 
                        key={index}
                        id={employee.id} 
                        onClick={handleEmployeeCardClick}
                        className={(employee.team === selectedteam ? 'col-3 m-1 border shadow':'col-3 m-1 border shadow')}>
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
