export default function Search(props) {

    return (

        <div className="search">
            <input className="search-bar" onInput={event => (event.target.value)} placeholder="Search mail" />
        </div>
    )
}

