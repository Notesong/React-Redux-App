import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../actions/actions";

const BeerList = props => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.beer.map(beer => <div>{beer.name}</div>)
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    beer: state.beer,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(BeerList);
