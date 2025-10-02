import { useState, useEffect, useRef } from "react";

export default function renderTable() {
  const [users, setUsers] = useState({});
  const colums = useRef([]);
  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        let columnKeys = Object.keys(json[0]);
        colums.current = columnKeys;
      });
  }
  console.log("abc");
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <table>
        <thead>
          {colums?.current?.map((d, index) => (
            <th key={index}>{d}</th>
          ))}
        </thead>
        <tbody>
          {users.length > 0 &&
            users?.map((user, index) => {
              const columnValue = Object.values(user);
              return (
                <tr key={index}>
                  {columnValue.map((d, i) => {
                    return typeof d == "object" ? (
                      <td key={i}>{JSON.stringify(d)}</td>
                    ) : (
                      <td key={i}>{d}</td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
