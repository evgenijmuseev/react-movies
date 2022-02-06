import React from "react";

export default class Search extends React.Component{
    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type);
        });
    }


    render() {
        return(
            <div className="input-field">
                <input 
                    type="search" 
                    className="validate"
                    name="search"
                    placeholder="Search movie"
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}/>
                <button 
                    className="btn blue btn-search"
                    onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
                Search
                </button>
                <div>
                    <label className="input-radio">
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio" 
                            checked={this.state.type === "all"}
                            data-type="all"
                            onChange={this.handleFilter}
                            />
                        <span>All</span>
                    </label>
                    <label className="input-radio">
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio" 
                            checked={this.state.type === "movie"}
                            data-type="movie"
                            onChange={this.handleFilter}
                            />
                        <span>Movies</span>
                    </label>
                    <label className="input-radio">
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio" 
                            checked={this.state.type === "series"}
                            data-type="series"
                            onChange={this.handleFilter}
                            />
                        <span>Series</span>
                    </label>
                </div>
            </div> 
        )
    }
}