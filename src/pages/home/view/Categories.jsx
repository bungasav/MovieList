import Chips from "../../../components/Chips";
import { CATEGORIES } from "../../../data/index";
import { Divider, Row } from "antd";
import { Typography } from "antd";

function Categories({ selectedCategory, onClickCategory }) {
  console.log();
  return (
    <div>
      <Divider orientation="left">
        <Typography.Title level={2}>Categories</Typography.Title>
      </Divider>
      <Row
        style={{
          marginTop: "10px",
        }}
      >
        {CATEGORIES?.map((category) => (
          <Chips
            key={category.value}
            label={category.name}
            onClick={() => onClickCategory(category.value)}
            isActive={selectedCategory === category.value}
          />
        ))}
      </Row>
    </div>
  );
}

export default Categories;
