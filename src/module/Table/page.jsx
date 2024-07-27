"use client";
import { useState } from "react";
import "./table.css";
import sortingIcon from "../../../public/assets/sorting-icon.png";

const Table = ({ rows, cols }) => {
  const [data, setData] = useState(cols);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {rows.map((row) => (
              <th onClick={row.sorting ? () => sortData(row.id) : null}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxHeight: "12px",
                    gap: "8px",
                  }}
                >
                  <p>{row.title}</p>
                  {row.sorting && <img src={sortingIcon.src} width={12} height={12} />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <img src={item.icon} width={32} height={32} />
                <span>{item.name}</span>
              </td>
              <td>{item.missionId}</td>
              <td>{item.brand}</td>
              <td>{item.start}</td>
              <td>{item.end}</td>
              <td>{item.type}</td>
              <td>{item.openings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
