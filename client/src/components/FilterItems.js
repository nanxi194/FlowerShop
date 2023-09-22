import { React, useState } from "react";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { cart_actionActions } from "../store/cart_action-slice";
import { filterActions } from "../store/filter-slice";
import Slider from "@mui/material/Slider";
import classes from "./FilterItems.module.css";

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
function FilterItems(props) {
  const flowerData = props.data;

  const isOpen = useSelector((state) => state.cart_action.filterIsVisible);

  const showSidebar = () => {
    dispatch(cart_actionActions.toggle_filter());
  };

  const dispatch = useDispatch();

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
    { type: "Tuilps", state: false },
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
        sort: props.sort,
      })
    );
    showSidebar();
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

  return (
    <>
      <div className={`${isOpen ? classes.show : classes.backdrop}`}></div>
      <div className={`${isOpen ? classes.open : classes.sidefilter}`}>
        <div className={classes.filtercontent}>
          <div className={classes.header}>
            <div className={classes.header_title}>
              <h2>FILTERS</h2>
            </div>
            <X onClick={showSidebar} className={classes.close_btn} />
          </div>
          <div className={classes.filter_items}>
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
                    label="Tuilps"
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
          </div>
          <div className={classes.filter_actions}>
            <button onClick={handleFilterSave} className={classes.subtotal_btn}>
              VIEW RESULTS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterItems;
