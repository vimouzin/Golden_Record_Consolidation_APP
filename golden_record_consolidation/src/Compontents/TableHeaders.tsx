// Define the interface for the TransformResult object
interface TransformResult {
    type: string;
    data_m: {
      [key: string]: any;
    };
  }
  
  // Define the interface for the TableRow object
  interface TableRow {
    [key: string]: string;
  }
  
  // Export the TableHeaders component
  export const TableHeaders = ({ type, data_m }: TransformResult) => {
    // Extract the "value" property from the data_m object and assign it to responseTable
    let responseTable: string[][] = data_m["value"];
  
    // Render the table headers
    return (
      <div>
        <table
          style={{
            minHeight: "456.8px",
            maxHeight: "456px",
            minWidth: "100%",
            borderSpacing: "0",
          }}
        >
          <tbody>
            {/* Iterate over the first row of the responseTable */}
            {responseTable[0].map((row: string, index: number) => (
              // Render a table row with a unique key and a height of 200px
              <tr key={index} style={{ height: "200px" }}>
                {/* Render a table data cell with specific styling */}
                <td
                  style={{
                    borderRight: "1px solid #C9D0D9",
                    borderBottom: "1px solid #C9D0D9",
                    padding: "5px",
                  }}
                >
                  {/* Render the value of the current row */}
                  {row}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  