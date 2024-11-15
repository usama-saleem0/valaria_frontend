import searchicon from "../../img/search_icon_h.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const FAQSearch = ({ products }) => {

  const validProducts = products.filter(product => typeof product.mainHeading === 'string');
  const [selected, setSelected] = useState([]);

  const navigate = useNavigate();

  // const search = () => navigate("/faqsearchresulth");
  const search = (event) => {
    event.preventDefault(); // Prevent form submission refresh

    if (selected.length > 0) {
      const selectedHeading = selected[0]; // Access the first (and only) selected item

      if (selectedHeading.id) { // Ensure there's a valid selected item with an ID
        // Store the selected ID in local storage (optional, if needed later)
        localStorage.setItem("faqid", selectedHeading.id.toString());

        navigate("/faqdetailh");

        
      }
    } else {
      alert("Please select a question from the list before searching.");
    }
  };
  return (
    <section className="w-100 faq--main--section--h">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="faq--search--detail--h faq--main--h mx-auto">
              <h1>How can we help?</h1>
         
              <form className="d-flex justify-content-between" onSubmit={search}>
                <Typeahead
                  id="faq-search"
                  options={products}
                  labelKey="mainHeading"
                  placeholder="Search question or topic..."
                  onChange={(selected) => setSelected(selected)} // Update selected state when an item is selected
                  selected={selected}
                  className="form-control me-3 faq--main--search--h"
                  aria-label="Search"
                />
                <button
                  className="btn btn-primary d-flex align-items-center faq--main--search--button--h"
                  type="submit"
                >
                  <div className="faq--main--search--icon--h me-2">
                    <img src={searchicon} alt="" />
                  </div>
                  Search
                </button>
                <div className="faq--main--search--icon--alt--h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width={25}
                    height={35}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSearch;
