
function FilterByTaste({allTaste, setTaste}) {

    const handleChange = (ev) => {
        const value = ev.target.value
        setTaste(value)
    }
  return (
    <select name="" id="" onChange={handleChange}>
    <option value='all'>SABORES</option>
        {allTaste.map((type, i) => <option key={i} value={type}>{type}</option>)}
    </select>
  )
}

export default FilterByTaste

