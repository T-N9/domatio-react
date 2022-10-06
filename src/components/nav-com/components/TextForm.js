import React, { useContext, useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import { DataContext } from "../../../App";
import { searchContext } from "..";

const TextForm = () => {
  const [input, setInput] = useState("");
  const { searchToggle } = useContext(searchContext);

  const data_list = useContext(DataContext);

  // Hook for getting .card-grid height if it is lower than or equal 40px, this mean there is no item for card content and make visible .no-item-page
  useEffect(() => {
    let height = document.querySelector(".card-grid").clientHeight;

    if (height <= 40) {
      document.querySelector(".no-item-page").classList.remove("d-none");
    } else {
      document.querySelector(".no-item-page").classList.add("d-none");
    }
  }, [input, data_list]);

  // let data_options = data_list.map(data => {
  //     data_count++;
  //     return <li key={data_count} value={data.name}>{data.name}</li>
  // });

  // Search Text box function to call every time user type and play .d-none class to match with user input
  let cardClasses;
  function handleChange(e) {
    
    setTimeout(() => {
      cardClasses = Array.from(document.getElementsByClassName("cardSection"));
      setInput(e.target.value);

      Object.entries(cardClasses).filter((item) => {
        item[1].textContent
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) > -1
          ? item[1].classList.remove("d-none")
          : item[1].classList.add("d-none");

        return item[1];
      });
    }, 1500);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      action=""
      className={
        searchToggle
          ? "navbar--form search-active"
          : "navbar--form search-hidden"
      }
      onSubmit={handleSubmit}
    >
      <span className="overlay"></span>
      <label htmlFor="search-data" className="d-none">
        Search form
      </label>
      <input
        type="text"
        placeholder="Enter a name or tag"
        id="search-data"
        // list="data-list"
        autoComplete="off"
        onChange={handleChange}
        // value={input}
      />

      {/* <ul className="auto-complete">
                {
                    autoItems
                }
            </ul> */}
      <button aria-label="search button">
        <LineIcon name="search-alt" />
      </button>
    </form>
  );
};

export default TextForm;
