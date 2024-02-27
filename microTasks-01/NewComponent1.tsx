import React from "react";

// type TopCarsType = {
//   manufacturer: string
//   model: string
// }
//
// type NewComponentPropsType = {
//   cars: Array<TopCarsType>
// }

export const NewComponent1 = () => {
  const topCars = [
    {manufacturer: "BMW", model: "M5CS"},
    {manufacturer: "Mercedes", model: "E63S"},
    {manufacturer: "Audi", model: "RS6"},
  ];

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Manufacturer</th>
        <th>Model</th>
      </tr>
      </thead>
      <tbody>
      {topCars.map((cars, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{cars.manufacturer}</td>
            <td>{cars.model}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

// return (
//   <ul>
//     {props.students.map((objectFromStudentArray, index) => {
//       debugger
//       return (
//         <li key={objectFromStudentArray.id}>
//           <span>{objectFromStudentArray.name}</span>
//           <span> age: {objectFromStudentArray.age}</span>
//         </li>
//       )
//     })}
//   </ul>
// )
// }