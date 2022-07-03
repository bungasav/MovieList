import { Tag } from "antd";
function Chips({ label, onClick = () => {} ,isActive}) {
  return (
    <Tag
      style={{
        width: "auto",
        padding:"12px 14px",
        borderRadius: "1.2rem",
        backround: "lightgrey",
        cursor: "pointer",
        textAlign: "center",
        fontSize: "16px",
        margin:"8px 8px"
      }}
      color={isActive ? "blue" : ""}
      onClick={onClick}
    >
      {label}
    </Tag>
  );
}

export default Chips;
