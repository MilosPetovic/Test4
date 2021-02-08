const Launch = ({launch, launches}) => {

    // let time = launches.map(el => new Date(el.static_fire_date_unix * 1000))
    // console.log(time)

    return (
        <div>
            <p> Launch name : {launch.name} </p>
            <img src={launch.links.patch.small} alt={`Image of : ${launch.name}`} style={{width: '50px'}}></img>
            <p>Date :  </p>
        </div>
        )
}


export default Launch