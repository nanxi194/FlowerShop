import { React, useEffect, useState } from "react";
import FlowerCard from "../components/FlowerCard";
import classes from "./FlowersPage.module.css";
import { Filter } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { cart_actionActions } from "../store/cart_action-slice";
import { filterActions } from "../store/filter-slice";
import Footer from "../components/Footer";
import FilterItems from "../components/FilterItems";
import { navigationActions } from "../store/navigation-slice";

function FlowersPage(props) {
  const flowerData = props.data;
  const dispatch = useDispatch();
  dispatch(navigationActions.toggle_navigation(true));

  const products = useSelector((state) => state.filter.products);
  const totalProducts = useSelector((state) => state.filter.totalProducts);

  const [numberOfitemsShown, setNumberOfitemsShown] = useState(8);

  const totalItems = products.length;
  const showMore = () => {
    if (numberOfitemsShown + 4 <= totalItems) {
      setNumberOfitemsShown(numberOfitemsShown + 4);
    } else {
      setNumberOfitemsShown(totalItems);
    }
  };

  const showLess = () => {
    setNumberOfitemsShown(8);
  };

  const showSidebar = () => {
    dispatch(cart_actionActions.toggle_filter());
  };

  const [sort, setSort] = useState("default");

  useEffect(() => {
    dispatch(filterActions.SHOW_DATA(flowerData));
  }, []);

  function handleSelection(value) {
    setSort(value);
    if (value === "default") {
      dispatch(filterActions.SHOW_DATA(products));
    }
    if (value === "desc") {
      dispatch(filterActions.SORT_BY_ALPHABET_DESC(products));
    }
    if (value === "asc") {
      dispatch(filterActions.SORT_BY_ALPHABET_ASC(products));
    }
    if (value === "low to high") {
      dispatch(filterActions.SORT_BY_PRICE_LH(products));
    }
    if (value === "high to low") {
      dispatch(filterActions.SORT_BY_PRICE_HL(products));
    }
  }

  const itemsToShow = products
    .slice(0, numberOfitemsShown)
    .map((product, i) => (
      <FlowerCard
        key={i}
        title={product.title}
        price={product.price}
        src={product.image}
        src_hvoer={product.image_hover}
        data={product}
      />
    ));

  return (
    <>
      <div className={classes.flexcontainer}>
        <p className={classes.wrapper_front} onClick={showSidebar}>
          Filters
        </p>
        <Filter size={20} className={classes.icon} />
        <p>Showing {totalProducts} results</p>
        <div className={classes.wrapper_end}>
          <select onChange={(e) => handleSelection(e.target.value)}>
            <option value="default">Sort by: Featured</option>
            <option value="asc">Alphabetically, A-Z</option>
            <option value="desc">Alphabetically, Z-A</option>
            <option value="low to high">Price, low to high</option>
            <option value="high to low">Price, high to low</option>
          </select>
        </div>
      </div>

      <FilterItems data={flowerData} sort={sort} />

      <div className={classes.cards}>{itemsToShow}</div>

      <div className={classes.show_products}>
        {numberOfitemsShown === totalItems ? (
          <button onClick={showLess}>Load less</button>
        ) : (
          <button onClick={showMore}>Load more</button>
        )}
      </div>

      <Footer />
    </>
  );
}

export default FlowersPage;
