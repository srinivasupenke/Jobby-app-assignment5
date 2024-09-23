import {FaSearch} from 'react-icons/fa'

import ProfileDetails from '../ProfileDetails'

import './index.css'

// These are the lists used in the application. You can move them to any component needed.

const FilterGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
    console.log(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="input-search"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          id="searchButton"
          className="search-icon-button"
          aria-label="close"
          onClick={getJobs}
          data-testid="searchButton"
        >
          <FaSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderEmploymentDetails = () => {
    const {employmentTypesList} = props

    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading">Type of Employment</h1>
        <ul className="employment-type-list-container">
          {employmentTypesList.map(eachEmployeeType => {
            const {changeEmployeeList} = props
            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
              console.log(event.target.value)
            }

            return (
              <li
                className="employment-type-list"
                key={eachEmployeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  className="checkbox"
                  id={eachEmployeeType.employmentTypeId}
                  value={eachEmployeeType.employmentTypeId}
                />
                <label
                  className="label-name"
                  htmlFor={eachEmployeeType.employmentTypeId}
                >
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRangeDetails = () => {
    const {salaryRangesList} = props
    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
              console.log(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-range-list"
                onClick={onClickSalary}
                key={eachSalary.salaryRangeId}
              >
                <input
                  type="radio"
                  className="radio-input"
                  name="salary"
                  id={eachSalary.salaryRangeId}
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="label-name"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}

      {<ProfileDetails />}
      <hr className="horizontal-line" />
      {renderEmploymentDetails()}
      <hr className="horizontal-line" />
      {renderSalaryRangeDetails()}
    </div>
  )
}

export default FilterGroup
