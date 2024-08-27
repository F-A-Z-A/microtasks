type StudentType = {
  id: number;
  name: string;
  age: number;
};

type NewComponentType = {
  students: StudentType[];
};

export const NewComponent = (props: NewComponentType) => {
  const topCars = [
    { manufacturer: "BMW", model: "m5cs" },
    { manufacturer: "Mercedes", model: "e63s" },
    { manufacturer: "Audi", model: "rs6" },
  ];

  return (
    <table>
      <tr>
        <th>manufacturer</th>
        <th>model</th>
      </tr>
      {topCars.map((c, index) => (
        <tr key={index}>
          <td>{c.manufacturer}</td>
          <td>{c.model}</td>
        </tr>
      ))}
    </table>
  );
};


// type StudentType = {
//   id: number;
//   name: string;
//   age: number;
// };
//
// type NewComponentType = {
//   students: StudentType[];
// };
//
// export const NewComponent = (props: NewComponentType) => {
//   return (
//     <ul>
//       {props.students.map((s) => (
//         <li key={s.id}>
//           name: <b>{s.name}</b> / age: <b>{s.age}</b>
//         </li>
//       ))}
//     </ul>
//   );
// };