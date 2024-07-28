"use client";
import { useState } from "react";
import "./table.css";
import sortingIcon from "../../../public/assets/sorting-icon.png";

const Table = ({ rows, cols }) => {
  const [data, setData] = useState(cols);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
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

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {rows.map((row) => (
              <th key={row.id} onClick={row.sorting ? () => sortData(row.id) : null}>
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
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <img src={item.icon} width={32} height={32} alt="" />
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
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <div>
          Show{" "}
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          per page
        </div>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
