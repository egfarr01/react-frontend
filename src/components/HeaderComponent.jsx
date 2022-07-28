import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <div className="App-header">Book Boss</div>
                        <div className="App-subheading">A beautiful place to browse books</div>
                    </nav>

                </header>
            </div>
        );
    }
}

export default HeaderComponent;