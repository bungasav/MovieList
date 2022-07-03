import React from "react";
import Layout from "../../components/Layout";
import Categories from "./view/Categories";
import MovieList from "./view/MovieList";
import ModalMovie from "./view/ModalDetail";

function App() {
  const [detailMove, setMovie] = React.useState(null);
  const [category, setCategory] = React.useState("all");
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("asc");

  return (
    <Layout>
      <Categories
        selectedCategory={category}
        onClickCategory={(category) => setCategory(category)}
      />
      <MovieList
        sort={sort}
        onChangeSort={(sort) => setSort(sort)}
        search={search}
        onClickDetail={(detail) => {
          setMovie(detail);
        }}
        category={category}
        onSearch={(val) => setSearch(val)}
      />
      <ModalMovie detail={detailMove} onClose={() => setMovie(null)} />
    </Layout>
  );
}

export default App;
