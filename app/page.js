export default function Home() {
  return (
    <main style={{ fontFamily: "monospace", padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>🚀 Deployment Tracker</h1>
      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
        <tbody>
          <tr>
            <td style={labelStyle}>Version</td>
            <td style={valueStyle}>1</td>
          </tr>
          <tr>
            <td style={labelStyle}>Branch</td>
            <td style={valueStyle}>main</td>
          </tr>
          <tr>
            <td style={labelStyle}>Last Change</td>
            <td style={valueStyle}>Initial deployment</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ marginTop: "2rem" }}>📋 Deploy History</h2>
      <ul>
        <li>v1 — Initial deployment</li>
      </ul>
    </main>
  );
}

const labelStyle = { padding: "0.5rem", fontWeight: "bold", borderBottom: "1px solid #333" };
const valueStyle = { padding: "0.5rem", borderBottom: "1px solid #333" };
