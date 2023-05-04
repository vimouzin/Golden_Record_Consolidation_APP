import React from 'react'
import { CustomToolbar, TamrDataGrid, useGridApiRef } from '@tamr/apps-ui'

// Define interfaces for props
interface TransformResult {
  type: string;
  data_m: {
    [key: string]: any;
  };
}

interface TableRow {
  [key: string]: string;
}

// Create a component that renders a TamrDataGrid using the provided data
export const TamrGridDemo = ({ type, data_m }: TransformResult) => {
  // Get the data from the response
  let responseTable = data_m["value"];
  // Get the column names from the first row of the response table
  const columnNames = responseTable[0];
  // Generate an array of column objects for the TamrDataGrid
  const responseColumns = Object.values(data_m)[1][0].map((str: string) => ({ field: str }));

  // Generate an array of row objects for the TamrDataGrid
  let tableRows: TableRow[] = [];
  let idCounter = 0;
  responseTable.forEach((value: string[]) => {
    // Create an object for each row with the column names as keys
    let colIndex = 0;
    const record: TableRow = { id: `id${idCounter++}` };
    value.forEach((valuesOfRecord: string) => {
      // Assign values to the columns based on the column names
      record[columnNames[colIndex]] = valuesOfRecord;
      colIndex++;
    })
    if(idCounter !== 1){
      tableRows.push(record);
    }
  });

  // Initialize the grid API reference
  const apiRef = useGridApiRef()

  // Store the row data in state to allow for filtering
  const [rows, setRows] = React.useState(tableRows)

  // Define a function to escape special characters in a regular expression
  function escapeRegExp(value: string) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }

  // Define a function to handle search requests
  const [searchText, setSearchText] = React.useState('')
  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue))
    const filteredRows = tableRows.filter(row => {
      return Object.keys(row).some(field => {
        const regexTest = row[field as keyof typeof row].toString()
        return searchRegex.test(regexTest)
      })
    })
    setRows(filteredRows)
  }

  // Render the TamrDataGrid component with the generated column and row data
  return (
    <div>
      <TamrDataGrid
        rows={rows}
        columns={responseColumns}
        apiRef={apiRef}
        alwaysVisibleFields={['Id']}
        slots={{ toolbar: CustomToolbar }}
        slotProps={{
          toolbar: {
            value: searchText,
            onChange: event => requestSearch((event.target as HTMLInputElement).value),
            clearSearch: () => requestSearch(''),
          },
        }}
      />
    </div>
  )
}

// Export the component as the default export
export default TamrDataGrid;
