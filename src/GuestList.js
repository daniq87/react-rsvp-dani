import React from 'react';
import PropTypes from 'prop-types'
import Guest from './Guest';

const GuestList = function(props) {
    return (
        <ul>
            {props.guests.map((guest,index) =>
              <Guest
                  key={index}
                  name={guest.name}
                  isConfirmed={guest.isConfirmed}
                  handleConfirmation={() => props.toggleConfirmationAt(index)} />
            )}
        </ul>
    );
}

GuestList.propTypes = {
    guests: PropTypes.array.isRequired
}


export default GuestList;