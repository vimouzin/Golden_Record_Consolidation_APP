import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./Compontents/NavBar";
import { TamrGridDemo } from "./Compontents/data-grid";

function App() {
  // Example data
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

  // Initialize the query client
  const queryClient = new QueryClient();

  // States
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

    // Update example data and states
    example.data = data["data"]["value"]
    example.type = data["type"]
    setDataM(data["data"]);
    setKey((prevKey) => prevKey + 1);
  };

  // Render the app
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <TamrGridDemo key={key} type={example.type} data_m={data_m} />
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            id="script"
            value={script}
            onChange={(event) => setScript(event.target.value)}
            style={{ width: "100%", height: "200px" }}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </QueryClientProvider>
  );
}

export default App;
//test