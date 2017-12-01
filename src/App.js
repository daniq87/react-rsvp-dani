import React, { Component } from 'react';
import './App.css';
import GuestList from "./GuestList";

class App extends Component {

  state = {
    guests: [
        {
            name: 'Treasure',
            isConfirmed: false
        },
        {
            name: 'Dani',
            isConfirmed: true
        },
        {
            name: 'Raul',
            isConfirmed: true
        }
    ]
  }

  toggleConfirmationAt = (indexToChange) => {
      this.setState({
          guests: this.state.guests.map((guest, index) => {
            if(index === indexToChange) {
                return {
                    ...guest, //Spread operator. We only want to se the property 'isConfirmed', The rest will remain equal.
                    isConfirmed: !guest.isConfirmed
                }

            }
            return guest;
          })
      });
  }

  getTotalInvited = () => {
      return this.state.guests.length;
  }

  getAttendingGuests = () => {
      let count = 0;
      for (var guest of this.state.guests) {
          if(guest.isConfirmed) {
              count++;
          }
      }
      return count;
  }

  getUnconfirmedGuests = () => {
      let totalGuests = this.getTotalInvited();
      return  totalGuests > 0 ? totalGuests - this.getAttendingGuests() : 0;
  }

  render() {
    return (
        <div className="App">
            <header>
                <h1>RSVP</h1>
                <p>A Treehouse App</p>
                <form>
                    <input type="text" value="Safia" placeholder="Invite Someone" />
                    <button type="submit" name="submit" value="submit">Submit</button>
                </form>
            </header>
            <div className="main">
                <div>
                    <h2>Invitees</h2>
                    <label>
                        <input type="checkbox"/> Hide those who haven't responded
                    </label>
                </div>
                <table className="counter">
                    <tbody>
                    <tr>
                        <td>Attending:</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Unconfirmed:</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>3</td>
                    </tr>
                    </tbody>
                </table>
                <GuestList guests={this.state.guests}
                           toggleConfirmationAt={this.toggleConfirmationAt}/>
            </div>
        </div>
    );
  }
}

export default App;
