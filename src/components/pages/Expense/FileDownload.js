import React from "react";
import { Button } from "react-bootstrap";

const FileDownload = ({ data }) => {
  const downloadCSV = () => {
    const csv = generateCSV(data);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const generateCSV = (data) => {
    const header = Object.keys(data[0]).join(",") + "\n";
    const rows = data.map((item) => Object.values(item).join(",")).join("\n");
    return header + rows;
  };

  return (
    <div>
      <Button
        variant="success"
        onClick={downloadCSV}
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        Download Data
      </Button>
    </div>
  );
};

export default FileDownload;
