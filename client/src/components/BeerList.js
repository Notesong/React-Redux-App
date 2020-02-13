import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../actions/actions";

import Beer from './Beer';

const BeerList = props => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="beer-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.beer.map(beer => <Beer beer={beer} />)
      )}
    </div>
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
