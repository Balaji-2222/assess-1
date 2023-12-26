import './index.css'

const SearchResults = props => {
  const {historyList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyList
  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="insideContainer">
        <img src={logoUrl} className="special" alt="special" />
        <h1 className="specialHead">{title}</h1>
        <p className="domain">{domainUrl}</p>
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="button"
          alt="cross"
        />
      </button>
    </li>
  )
}

export default SearchResults
