const Select = ({launches,setLaunches,setSelect,}) => {

    // const some = Array(launches.map(el => launches.slice(0,21)))

    return (
        <div>
            <select onChange={(e) => {
                setSelect(e.target.value)
            }}>

            </select>
        </div>
        )
}




export default Select
