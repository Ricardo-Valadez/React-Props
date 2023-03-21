import React from 'react';
import PropTypes from 'prop-types';
import './global.css';

function Footer({children}){
return(
      <div className="Footer">
            {children}
      </div>
    )
}

export default Footer;


Footer.propTypes={
      children:PropTypes.object
}
  
Footer.defaultProps={
      children:<h1>Holaaaaa.</h1>
}