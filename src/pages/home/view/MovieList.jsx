import { MOVIES } from "../../../data/index";
import {
  Divider,
  Row,
  Col,
  Typography,
  Card,
  Image,
  Tag,
  Input,
  Select,
} from "antd";
import React from "react";

const { Meta } = Card;

const sortname = (a, b, sort) => {
  let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();

  if (fa < fb) {
    return sort === "asc" ? -1 : 1;
  }
  if (fa > fb) {
    return sort === "asc" ? 1 : -1;
  }
  return 0;
};

function MovieList({
  onClickDetail,
  category,
  onSearch,
  search,
  sort,
  onChangeSort = () => {},
}) {
  const memoizedMovie = React.useMemo(() => {
    const serachByCategory =
      category === "all"
        ? MOVIES
        : MOVIES?.filter((movie) => movie.categories.includes(category));
    console.log(search);
    const searchByKeyword =
      search === ""
        ? serachByCategory
        : serachByCategory?.filter((movie) =>
            movie.name.toLowerCase().includes(search.toLowerCase())
          );

    return searchByKeyword.sort((next, prev) => sortname(next, prev, sort));
  }, [category, search, sort]);
  return (
    <div
      style={{
        marginTop: "4rem",
      }}
    >
      <Divider orientation="left">
        <Typography.Title level={2}>Movies</Typography.Title>
      </Divider>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0px",
          }}
        >
          <Input.Search
            placeholder=" search Movie"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            style={{ width: "50%" }}
          />

          <Select
            defaultValue={sort}
            style={{
              width: 120,
              marginLeft: "24px",
              height: "100%",
            }}
            onChange={onChangeSort}
          >
            <Select.Option value="asc">Ascending</Select.Option>
            <Select.Option value="desc">Descending</Select.Option>
          </Select>
        </div>
        <Row
          gutter={[32, 16]}
          style={{
            marginTop: "3rem",
          }}
        >
          {memoizedMovie?.map((movie) => (
            <Col span={6} key={movie.id}>
              <Card
                onClick={() => onClickDetail(movie)}
                a
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
                cover={
                  <Image preview={false} alt={movie.name} src={movie.image} />
                }
              >
                <Row
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  {movie.categories?.map((category) => (
                    <Tag>{category}</Tag>
                  ))}
                </Row>
                <Meta title={movie.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default MovieList;
