"use client";
import { useState } from "react";
import "./table.css";
import sortingIcon from "../../../public/assets/sorting-icon.png";

const Table = ({ rows, cols }) => {
  const [data, setData] = useState(cols);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

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
    if (page > 0 && page < totalPages + 1) setCurrentPage(page);
  };

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
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <span
            style={{
              border: "1px solid #f2f2f2",
              alignItems: "center",
              borderRadius: "8px",
              padding: "11px 12px 8px 12px",
              fontSize: "14px",
            }}
          >
            Show
            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </span>
          <span style={{ color: "#666666" }}>per page</span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            style={{ border: "1px solid #f2f2f2", padding: "8px", borderRadius: "8px" }}
          >
            {"<-"}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
              style={{ border: "1px solid #f2f2f2", borderRadius: "8px", padding: "12px", fontSize: "14px" }}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            style={{ border: "1px solid #f2f2f2", padding: "8px", borderRadius: "8px" }}
          >
            {"->"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
