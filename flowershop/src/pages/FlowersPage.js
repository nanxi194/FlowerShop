import { React, useEffect, useState, useRef } from "react";
import FlowerCard from "../components/FlowerCard";
import classes from "./FlowersPage.module.css";
import { Filter } from "react-bootstrap-icons";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/filter-slice";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label className={classes.checkbox_wrapper}>
      <input
        className={value ? classes.checked : undefined}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

function FlowersPage(props) {
  const flowerData = props.data;
  const [isOpen, setIsOpen] = useState(false);
  const showSidebar = () => setIsOpen(!isOpen);
  const handleApply = () => setIsOpen(false);
  const dropdownRef = useRef(null);

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const [range, setRange] = useState([5, 30]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  const dispatch = useDispatch();
  const [sort, setSort] = useState("default");
  const products = useSelector((state) => state.filter.products);
  const totalProducts = useSelector((state) => state.filter.totalProducts);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick =
        dropdownRef.current && dropdownRef.current.contains(event.target);

      if (isDropdownClick) {
        // If the ref is not defined or the user clicked on the menu, we don’t do anything.
        return;
      }
      // Otherwise we close the menu.
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside); // handle desktops

    // Event cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // handle desktops
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (sort === "default") {
      dispatch(filterActions.SHOW_DATA(flowerData));
    }
    if (sort === "desc") {
      dispatch(filterActions.SORT_BY_ALPHABET_DESC(flowerData));
    }
    if (sort === "asc") {
      dispatch(filterActions.SORT_BY_ALPHABET_ASC(flowerData));
    }
    if (sort === "low to high") {
      dispatch(filterActions.SORT_BY_PRICE_LH(flowerData));
    }
    if (sort === "high to low") {
      dispatch(filterActions.SORT_BY_PRICE_HL(flowerData));
    }
  }, [flowerData, sort, dispatch]);

  return (
    <>
      <div className={classes.flexcontainer}>
        <p className={classes.wrapper_front} onClick={showSidebar}>
          Filters
        </p>
        <Filter size={20} className={classes.icon} />
        <p>Showing {totalProducts} results</p>
        <p className={classes.wrapper_end}>
          Sort by:
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default</option>
            <option value="asc">Alphabetically, A-Z</option>
            <option value="desc">Alphabetically, Z-A</option>
            <option value="low to high">Price, low to high</option>
            <option value="high to low">Price, high to low</option>
          </select>
        </p>
      </div>

      {isOpen && (
        <div className={classes.filter__dropdown__background}>
          <div ref={dropdownRef} className={classes.filter__dropdown}>
            <h1 className={classes.text_wrapper}>Filters</h1>
            <div className={classes.sidebar_box}>
              <h2 className={classes.subtitle}>Availability</h2>
              <div className={classes.filter__dropdown__actions}></div>
              <ul>
                <li>
                  <Checkbox
                    label="In stock"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Out of stock"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </div>

            <div className={classes.sidebar_box2}>
              <h2 className={classes.subtitle}>Price</h2>
              <div className={classes.filter__dropdown__actions}></div>
              <Slider
                value={range}
                onChange={handleChanges}
                valueLabelDisplay="auto"
                max={110}
              />
              <p>
                Price range: ${range[0]} - ${range[1]}
              </p>
            </div>

            <div className={classes.sidebar_box2}>
              <h2 className={classes.subtitle}>Colors</h2>
              <div className={classes.filter__dropdown__actions}></div>
              <ul>
                <li>
                  <Checkbox
                    label="White"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Yellow"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Pink"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Orange"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </div>

            <div className={classes.sidebar_box2}>
              <h2 className={classes.subtitle}>Types</h2>
              <div className={classes.filter__dropdown__actions}></div>
              <ul>
                <li>
                  <Checkbox
                    label="Lilies"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Roses"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Tulips"
                    value={checked}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className={classes.cards}>
        {products.map((product) => (
          <FlowerCard
            title={product.title}
            price={product.price}
            src={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default FlowersPage;
