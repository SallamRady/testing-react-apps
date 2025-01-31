export default function Item({ item }) {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        flexDirection: "column",
      }}
    >
      <h4>{item?.title}</h4>
      <p>{item?.description}</p>
      <button>btn 1</button>
      <button>btn 2</button>
      <div data-testid="btns-container">
        <button>btn 3</button>
        <button>btn 4</button>
        <button>btn 5</button>
      </div>
    </div>
  );
}
