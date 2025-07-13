import { useEffect, useState } from "react";
import { MdSync } from "react-icons/md";

function CardsGrid() {
  const [azkarList, setAzkarList] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "db.json")
      .then((res) => res.json())
      .then((data) => {
        setAzkarList(data.cards.map((item) => ({
          ...item,
          remaining: item.count
        })));
      })
      .catch((err) => console.error("فشل في تحميل البيانات:", err));
  }, []);

  const decreaseCount = (id) => {
    setAzkarList((prev) =>
      prev.map((item) =>
        item.id === id && item.remaining > 0
          ? { ...item, remaining: item.remaining - 1 }
          : item
      )
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <h1 style={styles.mainTitle}>أذكار المسلم</h1>
        <div style={styles.gridLayout}>
          {azkarList.map((item) => (
            <div
              key={item.id}
              style={{
                ...styles.cardBox,
                backgroundColor: item.backgroundColor ?? "#ccc",
              }}
            >
              <h2 style={styles.azkarText}>{item.title}</h2>
              <div style={styles.circleBtn} onClick={() => decreaseCount(item.id)}>
                <MdSync style={styles.circleIcon} />
              </div>
              <div style={styles.liveCount}>{item.remaining}</div>
              <div style={styles.original}>{item.count} مرة</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "fixed",
    inset: 0,
    background: "#fff",
    overflowY: "auto",
    direction: "rtl",
    fontFamily: "'Tajawal', sans-serif",
  },
  wrapper: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  mainTitle: {
    textAlign: "center",
    fontSize: "3.5rem",
    fontWeight: "800",
    fontFamily: "'Tajawal', sans-serif",
    background: "linear-gradient(to right, #f39c12, #d35400)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    borderBottom: "3px solid #d35400",
    width: "100%",
    paddingBottom: "5px",
    marginBottom: "30px",
  },
  gridLayout: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    width: "100%",
  },
  cardBox: {
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    textAlign: "center",
    transition: "all 0.3s ease",
    minHeight: "180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  azkarText: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    fontWeight: "700",
    color: "#000", 
  },
  circleBtn: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#000",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },
  circleIcon: {
    fontSize: "34px",
    color: "#fff",
  },
  liveCount: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#000",
  },
  original: {
    fontSize: "1rem",
    marginTop: "5px",
    color: "#333",
  },
};

export default CardsGrid;
