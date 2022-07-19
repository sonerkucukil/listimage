import React from "react";

class SearchInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {entry:''};
    }
    onFormSubmit=(i)=> {
        i.preventDefault();
        this.props.onSearchSubmit(this.state.entry);

    }

    render () {
        return (
            <div className="ui segment">
                 <form  onSubmit= { this.onFormSubmit} className="ui form" >
                     <div className="field">
                         <div className="ui massive icon input">
                         <input type='text' placeholder="search..." 
                         onChange={(i) => this.setState({entry: i.target.value })}
                         value ={this.state.entry}
                         />
                         <i className="searh icon"></i>
                         </div>
                     </div>
                    
                </form>
          </div>
        )
    }
    
}

export default SearchInput; 