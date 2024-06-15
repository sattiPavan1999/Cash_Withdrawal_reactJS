// Write your code here
import './index.css'
const DenominationItem = props => {
  const {eachItem, onChangingAmount} = props
  const {id, value} = eachItem

  const changeAmount = () => {
    onChangingAmount(id,value)
  }

  return (
    <li className="list-item">
      <button className="button" onClick={changeAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
