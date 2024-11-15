import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

const SubmitNewsDirectorForm = () => {
  return (
    <div class="container">
      <div class="my--container--h mx-auto">
        <div class="row">
          <div class="col">
            <div class="mb-3 d-flex justify-content-between align-items-center">
              <h1
                for="exampleFormControlInput1"
                class="form-label form-label-alt mb-1"
              >
                Submit News Director
              </h1>
              <div class="experience--close--h">
                <img src={require("../../img/Union_h.png")} alt="" />
              </div>
            </div>

            <div class="col-lg-8">
              <div class="news--director--img--h d-flex align-items-center">
                <div class="news--director--img--h--cont">
                  <img src={require("../../img/account_h.png")} alt="" />
                </div>
                <a href="#" class="profile--image--a--h">
                  Upload Image in <span>jpg or png format</span>
                </a>
              </div>
            </div>

            <div className="d-flex align-items-end mb-3 mt-1 experience--title--cont--h experience--col--h">
              <div className="sumbit--director--inp--h experience--col--child--h">
                <label
                  htmlFor="inputEmail4"
                  className="form-label form-label-alt"
                >
                  News director’s name
                </label>
                <input
                  type="email"
                  className="form-control experience--email--inp--h"
                  id="inputEmail4"
                  placeholder="Type here..."
                />
              </div>
              <div className="form-check experience--chkbox--h d-flex align-items-center experience--col--child--h">
                <input
                  className="form-check-input experience--form--check--input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Current news director
                </label>
              </div>
            </div>

            <div class="d-flex align-items-end mb-3 mt-1 experience--title--cont--h ">
              <div class="col-lg-12 w-100">
                <label for="inputEmail4" class="form-label form-label-alt">
                  What station does/did this News Director work for?
                </label>
                <input
                  type="email"
                  class="form-control experience--email--inp--h"
                  id="inputEmail4"
                  placeholder="Type here..."
                />
              </div>
            </div>

            <div className="mb-3 mt-1 col-12">
              <label
                htmlFor="inputGroupSelect01"
                className="form-label form-label-alt"
              >
                Station's website
              </label>
              <select
                className="form-select experience--job--inp--h"
                id="inputGroupSelect01"
              >
                <option value="" style={{ display: "none" }}>
                  Choose options
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="d-flex align-items-end mb-3 mt-1 experience--title--cont--h">
              <div class="col-lg-12 w-100">
                <label for="inputEmail4" class="form-label form-label-alt">
                  News director’s social media
                </label>
                <div className="news--director--inp--svg--cont">
                  <input
                    type="email"
                    class="form-control experience--email--inp--h mb-3"
                    id="inputEmail4"
                    placeholder="Type link here..."
                  />
                  <input
                    type="email"
                    class="form-control experience--email--inp--h"
                    id="inputEmail4"
                    placeholder="Type link here..."
                  />
                  <div className="news--director--inp--svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <path
                        d="M18.1789 8.82623C18.1789 7.98129 17.4939 7.29633 16.649 7.29633L10.9342 7.29633L10.9342 1.58068C10.9342 0.735738 10.2492 0.0507812 9.40428 0.0507812C8.55934 0.0507812 7.87438 0.73574 7.87438 1.58068L7.87438 7.29633H2.15856C1.31362 7.29633 0.628662 7.98129 0.628662 8.82623C0.628662 9.67116 1.31362 10.3561 2.15856 10.3561H7.87438L7.87438 16.0711C7.87438 16.9161 8.55934 17.601 9.40427 17.601C10.2492 17.601 10.9342 16.916 10.9342 16.0711V10.3561H16.649C17.4939 10.3561 18.1789 9.67116 18.1789 8.82623Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="about--button--h pt-1 w-50">
              <button
                type="button"
                className="btn btn-primary about--btn--h about--btn--h--alt"
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubmitNewsDirectorForm;
