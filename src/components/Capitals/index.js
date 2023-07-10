import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activevalue: countryAndCapitalsList[0].id,
  }

  changedvalue = event => {
    // console.log(event.target.value)
    this.setState({activevalue: event.target.value})
  }

  render() {
    const {activevalue} = this.state
    console.log(activevalue)
    const filtered = countryAndCapitalsList.find(
      each => each.id === activevalue,
    )
    const {country} = filtered
    console.log(filtered, country)

    return (
      <div className="bg_container">
        <div className="container">
          <h1>Countries And Capitals </h1>
          <div className="last">
            <select
              onChange={this.changedvalue}
              value={activevalue}
              className="selection"
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="labelelement"> is capital of which country ?</p>
          </div>

          <p className="result">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
