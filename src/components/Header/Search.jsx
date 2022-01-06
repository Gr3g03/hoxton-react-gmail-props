export default function Search(props) {

    return (

        <div className="search">
            <input className="search-bar" onChange={event => props.setsearchTitle(event.target.value)} placeholder="Search mail" />
        </div>
    )
}

