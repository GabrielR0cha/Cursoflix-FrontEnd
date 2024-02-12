import { Spinner } from "reactstrap";


const PageSpinner = () => {


  return (
    <> 
      <div className="vh-100 d-flex justify-content-center align-items-center bg-black">
        <Spinner animation="border" color="light" />
      </div>
    
    </>
  )
}

export default PageSpinner