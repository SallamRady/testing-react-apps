import Item from "./Item";

export default function Welcome({ username }) {
  const items = [
    { title: "item 1", description: "item 1 description" },
    { title: "item 2", description: "item 2 description" },
    { title: "item 3", description: "item 3 description" },
    { title: "item 4", description: "item 4 description" },
  ];
  return (
    <div>
      <h1>welcome {username},in Items Page</h1>
      <h3>Items</h3>
      {items?.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </div>
  );
}
