/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import st from './style.scss';


class Pagination extends React.Component {
  render() {
    return (
      <div className={`${st.pagination}`}>
         <div >
            <button onClick={() => this.props.nextPage('First')} className={`${st.button}`}>First</button>
            <button onClick={() => this.props.nextPage('Previous')} className={`${st.button}`}>Previous</button>
            {this.props.pagination.map(e => <button key={e} onClick={() => this.props.nextPage(e)} className={this.props.curentPage === e ? `${st.pageActive}` : `${st.page}`}>{e} </button>)}
            <button onClick={() => this.props.nextPage('Next')} className={`${st.button}`}>Next</button>
            <button onClick={() => this.props.nextPage('Last')} className={`${st.button}`}>Last</button>

        </div>
      </div>
    );
  }
}
export default connect()(Pagination);
