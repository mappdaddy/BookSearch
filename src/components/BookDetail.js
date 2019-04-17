import React from "react";

function BookDetail(props) {
  // console.log(props)
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 text-left">
          <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
        </div>
        <div className="col-10 text-left">
          <h3>Title: {props.title}</h3>
          <h3>Authors: {props.authors}</h3>
          <h3>Description: {props.description}</h3>
          <a className="btn btn-primary View-Btn" href={props.link} >View</a>
          <a className="btn btn-success View-Btn" href={props.link} >Save</a>
        </div>

      </div>
    </div>
  );
}

export default BookDetail;