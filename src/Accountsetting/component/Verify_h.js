import imgUpload from "../../img/img-upload_h.png";
const VerifyComponent = () => {
  return (
    <>
      <h1 className="account-setting-right-title">Request to verify account</h1>
      <p>Please upload your paperwork so we can review your request.</p>

      <div className="verify--image--container d-flex">
        <div className="setting--verify--img--container">
          <div className="setting--verify--img">
            <img src={imgUpload} alt="" />
          </div>
          <div className="setting--verify--img">
            <img src={imgUpload} alt="" />
          </div>
          <div className="setting--verify--img">
            <img src={imgUpload} alt="" />
          </div>
        </div>
        <div>
          <a href="">
            Upload Image in <span>jpg or png format</span>
          </a>
        </div>
      </div>
      <button type="button" className="btn btn-outline-primary verify--btn--h">
        Send request
      </button>
    </>
  );
};
export default VerifyComponent;
