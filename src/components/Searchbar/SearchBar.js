import React from "react"
import "./SearchBar.css"


class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = { searchTerm: "" }
    }

    onInputChange(searchTerm) {
        this.setState({ searchTerm })
        this.props.onTermChange(searchTerm)
    }

    render() {
        return (
            <div className="search">
            <form className="form-group">
            <input class="form-control form-control-lg" 
                placeholder="Search all Gif's"
                onChange={event => this.onInputChange(event.target.value)}
            />
            </form> 
        </div>
        )
    }
}

export default SearchBar
