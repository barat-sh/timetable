import { useEffect, useState } from "react";

const days = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const slotsPerDay = 7;
  
  const departments = {
    "ComputerScience": {
      subjects: [
        "Computer Networks",
        "Hardware",
        "System Design",
        "Data Structures and Algorithms (DSA)",
        "Cryptography",
        "LIC",
        "Backend",
        "Data Engineering",
      ],
      faculty: ["Kirat", "Ankur", "Aditya", "Nikhil"],
    },
    Electronics: {
      subjects: [
        "Analog Circuits",
        "Digital Signal Processing",
        "Microcontrollers",
        "Power Electronics",
        "Communication Systems",
        "Control Systems",
        "Embedded Systems",
        "VLSI Design",
      ],
      faculty: [
        "Rahul",
        "Sonia",
        "Amit",
        "Priya"
      ],
    },
  };

const Slots = () => {
    const [total, setTotal] = useState({});


    function generateTimetable() {
        const timetable = {};
    
        Object.keys(departments).forEach((department) => {
        timetable[department] = {};
    
        days.forEach((day) => {
            timetable[department][day] = [];
    
            for (let slot = 1; slot <= slotsPerDay; slot++) {
            const subject =
                departments[department].subjects[
                Math.floor(Math.random() * departments[department].subjects.length)
                ];
            const facultyMember =
                departments[department].faculty[
                Math.floor(Math.random() * departments[department].faculty.length)
                ];
            timetable[department][day].push(`${subject} - ${facultyMember}`);
            }
        });
        });
    
        return timetable;
    }

    useEffect(()=>{
        const result = generateTimetable();
        setTotal(result);
    }, [])
    console.log(total)

    const CS = total.ComputerScience;

    return (
        <div>
            <ul>
            {CS.monday.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    )
}

export default Slots;