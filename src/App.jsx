import CardsGrid from "./CardsGrid";

function App() {
  return (
    <div className="App" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 
        style={{ 
          textAlign: "center", 
          padding: "20px 0", 
          fontSize: "3rem", 
          color: "#2c3e50", 
          fontWeight: "700", 
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          letterSpacing: "2px",
          textShadow: "1px 1px 3px rgba(0,0,0,0.1)"
        }}
      >
        أذكار المسلم
      </h1>
      <CardsGrid />
    </div>
  );
}

export default App;
