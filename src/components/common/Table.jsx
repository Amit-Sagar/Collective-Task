"use client";
import { useState } from "react";
import assets from "@/assets";
import Image from "next/image";

const Table = ({ rows, cols }) => {
  const [data, setData] = useState(rows);
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
    setCurrentPage(page);
  };

  return (
    <div>
      <table className="border border-collapse	">
        <thead>
          <tr>
            {cols.map((col) => (
              <th
                className="border border-[#ddd] py-3 px-4 text-left bg-[#f2f2f2] cursor-pointer text-sm"
                key={col.id}
                onClick={col.sorting ? () => sortData(col.id) : null}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxHeight: "12px",
                    gap: "8px",
                  }}
                >
                  <p>{col.title}</p>
                  {col.sorting && <Image src={assets.images.sorting} width={12} height={12} />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index} className="hover:bg-[#f1f1f1]">
              {cols.map((col) => (
                <td className="border border-[#ddd] py-3 px-4 text-left  text-xs">{col.render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
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
