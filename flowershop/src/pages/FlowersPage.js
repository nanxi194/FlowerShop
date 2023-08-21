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
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();
  const [sort, setSort] = useState("default");
  const products = useSelector((state) => state.filter.products);
  const totalProducts = useSelector((state) => state.filter.totalProducts);

  const [checkedAvailability, setCheckedAvailability] = useState([
    { type: "In stock", state: false },
    { type: "Out of stock", state: false },
  ]);
  const [checkedColor, setCheckedColor] = useState([
    { type: "White", state: false },
    { type: "Yellow", state: false },
    { type: "Pink", state: false },
    { type: "Orange", state: false },
  ]);
  const [checkedType, setCheckedType] = useState([
    { type: "Lilies", state: false },
    { type: "Roses", state: false },
    { type: "Tulips", state: false },
    { type: "Sunflowers", state: false },
  ]);
  const [range, setRange] = useState([0, 400]);

  function handleFilterSave() {
    const newData = [
      { title: "availability", filterdata: [...checkedAvailability] },
      { title: "price", filterdata: range },
      { title: "color", filterdata: [...checkedColor] },
      { title: "types", filterdata: [...checkedType] },
    ];
    dispatch(
      filterActions.FILTER({
        filterquests: newData,
        flowerfilterdata: flowerData,
        sort: sort,
      })
    );
    setIsOpen(false);
  }

  function handleAvailabilityChange(index) {
    const nextCheckedAvailability = [...checkedAvailability];
    nextCheckedAvailability[index].state = !checkedAvailability[index].state;
    setCheckedAvailability(nextCheckedAvailability);
  }

  const handleColorChange = (index) => {
    const nextCheckedColor = [...checkedColor];
    nextCheckedColor[index].state = !checkedColor[index].state;
    setCheckedColor(nextCheckedColor);
  };

  const handleTypeChange = (index) => {
    const nextCheckedType = [...checkedType];
    nextCheckedType[index].state = !checkedType[index].state;
    setCheckedType(nextCheckedType);
  };

  function handleRangeChange(event, newValue) {
    setRange(newValue);
  }

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

  // useEffect(() => {
  //   if (sort === "default") {
  //     dispatch(filterActions.SHOW_DATA(flowerData));
  //   }
  //   if (sort === "desc") {
  //     dispatch(filterActions.SORT_BY_ALPHABET_DESC(flowerData));
  //   }
  //   if (sort === "asc") {
  //     dispatch(filterActions.SORT_BY_ALPHABET_ASC(flowerData));
  //   }
  //   if (sort === "low to high") {
  //     dispatch(filterActions.SORT_BY_PRICE_LH(flowerData));
  //   }
  //   if (sort === "high to low") {
  //     dispatch(filterActions.SORT_BY_PRICE_HL(flowerData));
  //   }
  // }, []);

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
                    value={checkedAvailability[0].state}
                    onChange={() => handleAvailabilityChange(0)}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Out of stock"
                    value={checkedAvailability[1].state}
                    onChange={() => handleAvailabilityChange(1)}
                  />
                </li>
              </ul>
            </div>

            <div className={classes.sidebar_box2}>
              <h2 className={classes.subtitle}>Price</h2>
              <div className={classes.filter__dropdown__actions}></div>
              <Slider
                value={range}
                onChange={handleRangeChange}
                valueLabelDisplay="auto"
                max={400}
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
                    value={checkedColor[0].state}
                    onChange={() => handleColorChange(0)}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Yellow"
                    value={checkedColor[1].state}
                    onChange={() => handleColorChange(1)}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Pink"
                    value={checkedColor[2].state}
                    onChange={() => handleColorChange(2)}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Orange"
                    value={checkedColor[3].state}
                    onChange={() => handleColorChange(3)}
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
                    value={checkedType[0].state}
                    onChange={() => handleTypeChange(0)}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Roses"
                    value={checkedType[1].state}
                    onChange={() => handleTypeChange(1)}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Tulips"
                    value={checkedType[2].state}
                    onChange={() => handleTypeChange(2)}
                  />
                </li>
                <li>
                  <Checkbox
                    label="Sunflowers"
                    value={checkedType[3].state}
                    onChange={() => handleTypeChange(3)}
                  />
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={handleFilterSave}
                className={classes.save_button}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={classes.cards}>
        {products.map((product, i) => (
          <FlowerCard
            key={i}
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
