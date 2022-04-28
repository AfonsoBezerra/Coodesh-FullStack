import React from 'react';

const FontStyles = ({ children }) => {
    return (
      <React.Fragment>
        <style jsx global>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap')
          `}
        </style>
        
        {children}
      </React.Fragment>
    );
}

export default FontStyles;