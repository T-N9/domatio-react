import React, { useContext, useEffect } from "react";
import LineIcon from "react-lineicons";
import { searchContext } from "..";

const TextForm = () => {

    const [input , setInput] = React.useState("");
    const { searchToggle } = useContext(searchContext);

    // Hook for getting .card-grid height if it is lower than or equal 40px, this mean there is no item for card content and make visible .no-item-page 
    useEffect( () => {
        let height = document.querySelector('.card-grid').clientHeight;
        
        if(height <= 40) {
            document.querySelector('.no-item-page').classList.remove('d-none');
        }else{
            document.querySelector('.no-item-page').classList.add('d-none');
        }
    }, [input])

    // const data_list = useContext(DataContext);
    // let data_count = 0;
    // let data_options = Object.entries(data_list).map(data => {
    //     data_count++;
    //     return <option key={data_count} value={data[1].name}>{data[1].name}</option>
    // });

    // Search Text box function to call every time user type and play .d-none class to match with user input
    let cardClasses;
    function handleChange(e) {
        cardClasses = Array.from(document.getElementsByClassName('cardSection'));
        setInput(e.target.value);

        Object.entries(cardClasses).filter(item => {
            item[1].textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1  ?  
            item[1].classList.remove('d-none') :
            item[1].classList.add('d-none');

            return item[1];
        });
        
        // console.log(e.target.value);
        
        
        // Object.entries(cardClasses).map(item => {
        //     item[1].classList.add('d-none');
        // });
    }

    function handleSubmit (e) {
        e.preventDefault();
    }

    return (
        <form action="" className={ searchToggle ? "navbar--form search-active" : "navbar--form search-hidden"} onSubmit={handleSubmit}>
            <label for="search-data" className="d-none">Search form</label>
            <input
                type="text"
                placeholder="Enter a name or tag"
                id="search-data"
                // list="data-list"
                autoComplete="off"
                onChange={handleChange}
                value={input}
            />

            {/* <datalist id="data-list">
                {data_options}
            </datalist> */}
            <button aria-label="search button">
                <LineIcon name="search-alt" />
            </button>
        </form>
    )
}

export default TextForm;