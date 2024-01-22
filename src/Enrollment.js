import { useEffect, useState } from "react";

const existingList = [
  { id: "Some-id", name: "Jyothi" },
  { id: "Some-id3", name: "Babu" },
  { id: "Some-id3", name: "Araja" },
];

export default function Enrollment() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [list, setList] = useState(existingList);

  const onSubmit = () => {
    if (id.length === 0 || name.length === 0) return;
    const record = { id, name };
    setList([...list, record]);
    setName("");
    setId("");
  };

  useEffect(() => {
    alert("New Record Added");
  }, [list]);

  return (
    <div>
      <input
        placeholder="ID"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={onSubmit}
        disabled={id.length === 0 || name.length === 0}
      >
        Submit
      </button>
      <table style={{ width: 500, marginTop: 16 }} border={1}>
        <thead>
          <tr>
            <th style={{ width: "50%" }}>ID</th>
            <th style={{ width: "50%" }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {list.map((record) => (
            <tr>
              <td>{record.id}</td>
              <td>{record.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
