import React from "react"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
        <div className="container-fluid">
         <nav class="navbar navbar-light bg-light">
           <span class="navbar-brand mb-0 h1">Chidi Okoye's Giphy Search</span>
       </nav>
        </div>
    )
  }
}

export default Header
