const Buttonh = ( onSave, onCancel )=>{
    return(
        <>
         <div className="experience--button--h pt-1">
        <button 
          type="button"
          className="btn btn-primary experience--btn--h experience--btn--h--alt"
          onClick={onSave}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
        </>
    )
}
export default Buttonh