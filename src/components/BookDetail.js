import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Title: {props.title}</h3>
      <h3>Authors: {props.authors}</h3>
      <h3>Description: {props.description}</h3>
      <a className="btn btn-primary View-Btn" href={props.link} >View</a>
      
    </div>
  );
}

export default BookDetail;



// target="_blank"