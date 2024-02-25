import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const isActiveTab = isActive ? 'active-tab-button' : ''

  return (
    <li>
      <button
        type="button"
        onClick={onClickTab}
        className={`btn ${isActiveTab}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
