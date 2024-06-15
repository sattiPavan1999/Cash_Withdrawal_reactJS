// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {

  state = {value: 2000}

  onChangingAmount = (id,value) => {
    this.setState(prevState => {
      return {value: prevState.value - value}
    })
  }

  render() {
    const {value} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="first-card">
            <div className="letterS">
              <p className="letter">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="second-card">
            <div>
              <p>Your Balance</p>
            </div>
            <div>
              <p className="number">{value}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw">Withdraw</p>
          </div>
          <div>
            <p className="chooseSum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="unordered">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                onChangingAmount={this.onChangingAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
