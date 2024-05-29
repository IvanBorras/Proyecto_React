
function FilterByType({allType, setType}) {

  const handleChange = (ev) => {
      const value = ev.target.value
      setType(value)
  }
return (
  <select name="" id="" onChange={handleChange}>
  <option value='all'>TIPO</option>
      {allType.map((type, i) => <option key={i} value={type}>{type}</option>)}
  </select>
)
}

export default FilterByType

