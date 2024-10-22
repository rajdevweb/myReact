import React from 'react'


function Card({props,student_id}) {
  return (
    // <div className="card">
    //   <h3>{name}</h3>
    //   <p>ID: {student_id}</p>
    //   <p>Division: {division}</p>
    //   <p>Gender: {gender}</p>
    //   <p>Grade: {grade}</p>
    // </div>

    <>
    <div>name: {name} </div>
    <div>name: {student_id} </div>
    </>
  );
}

export default Card;
