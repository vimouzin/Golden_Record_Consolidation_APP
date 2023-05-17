
import { TamrGridDemo } from "./data-grid";
import React, { useState } from "react";
import { TableHeaders } from "./TableHeaders";

export const DropDownPage: React.FC = () => {
  const example = {
    type: "heyyy",
    data: {
      "use students.csv": [
        ["Name", "Year", "Major1", "Major2"],
        ["Alice", "2", "Political Studies", "null"],
        ["Bob", "2", "Math", "Philosophy"],
        ["Charlie", "4", "French", "null"],
        ["Dylan", "3", "Math", "Political Studies"],
        ["Eric", "1", "Philosophy", "French"],
        ["Farah", "2", "Engineering", "null"],
      ],
      "value": [
        ["Name", "Year", "Major1", "Major2"],
        ["Alice", "2", "Political Studies", "null"],
        ["Bob", "2", "Math", "Philosophy"],
        ["Charlie", "4", "French", "null"],
        ["Dylan", "3", "Math", "Political Studies"],
        ["Eric", "1", "Philosophy", "French"],
        ["Farah", "2", "Engineering", "null"],
      ],
    },
  };

  const [script, setScript] = useState<string>("");
  const [data_m, setDataM] = useState(example.data);
  const [key, setKey] = useState<number>(0);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Set headers
    const headers: HeadersInit = {
      "Content-Type": "text/plain",
    };

    // Send request to the server
    const response = await fetch("/api/transform", {
      method: "POST",
      headers: headers,
      body: script,
    });

    // Get response data
    const data = await response.json();
    console.log(data)

    // Update example data and states
    example.data = data["data"]["value"]
    example.type = data["type"]
    setDataM(data["data"]);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="main-body-rules" style={{ minWidth: "100%" }}>
      <table style={{ minWidth: "100%", borderSpacing: "0" }}>
        <tbody>
          <tr>
            <th
              style={{
                width: "60%",
                border: "1px solid #C9D0D9",
                height: "95px",
              }}
            >
              Preview Golden Records Table
            </th>
            <th
              style={{
                width: "40%",
                height: "95px",
                borderLeft: "none",
                borderTop: "1px solid #C9D0D9",
                borderBottom: "1px solid #C9D0D9",
              }}
            >
              Input Fields
            </th>
          </tr>
          <tr style={{ maxHeight: "300px" }}>
            <td>
              <div style={{ maxHeight: "450px", height: "450px", overflowY: "scroll" }}>
              <TamrGridDemo key={key} type={example.type} data_m={data_m} />

              </div>
              </td>
            
            <td>
              <div style={{ maxHeight: "450px", height: "450px", overflowY: "scroll" }}>
              <TableHeaders key={key} type={example.type} data_m={data_m} ></TableHeaders>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            id="script"
            value={script}
            onChange={(event) => setScript(event.target.value)}
            style={{ width: "100%", height: "300px" }}
          />
          {/* Hide the submit button */}
          <button type="submit" style={{ visibility: "hidden", position:"absolute"}}>Submit</button>
        </form>
      </div>
    </div>
  );
};


