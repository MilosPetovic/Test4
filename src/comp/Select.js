const Select = ({launches,setLaunches,setSelect,}) => {

    // const some =launches.slice(0,21)

    return (
        <div>
            <select onChange={(e) => {
                setSelect(e.target.value)
            }}>
            <options>20</options>
            <options>30</options>
            <options>50</options>
            </select>
        </div>
        )
}




export default Select
