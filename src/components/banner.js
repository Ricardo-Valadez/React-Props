// import React from 'react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './global.css';

// function Banner({texto}) {
//   return ( 
//     <div className='Banner'>{texto}</div>
//   )
// }

class Banner extends React.Component {
  render() {
    const {texto} = this.props;
    return (
      <div className='Banner'>{texto}</div>
    )
  }
}



export default Banner;

Banner.propTypes = {
  texto: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  texto: 'Texto por defecto',
};


