import React, { Component } from 'react';
import BookService from '../services/BookService';
import { Link } from 'react-router-dom';

class CreateBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {isbn: '', copies_sold: '', description: '', genre: 'Sci-Fi', price: '', title: '', year_published: '', author: ''};

        this.changeCopiesSoldHandler = this.changeCopiesSoldHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeGenreHandler = this.changeGenreHandler.bind(this);
        this.changeYearPublishedHandler = this.changeYearPublishedHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeISBNHandler = this.changeISBNHandler.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeISBNHandler(event) {
        this.setState({isbn: event.target.value});
    }

    changeCopiesSoldHandler(event) {
        this.setState({copiesSold: event.target.value});
    }

    changeDescriptionHandler(event) {
        this.setState({description: event.target.value});
    }

    changeGenreHandler(event) {
        this.setState({genre: event.target.value});
    }

    changePriceHandler(event) {
        this.setState({price: event.target.value});
    }

    changeTitleHandler(event) {
        this.setState({title: event.target.value});
    }

    changeYearPublishedHandler(event) {
        this.setState({year_published: event.target.value});
    }

    changeAuthorHandler(event) {
        this.setState({author: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let book = {isbn: this.state.isbn, copiesSold: this.state.copiesSold, description: this.state.description, genre: this.state.genre, price: this.state.price, title: this.state.title, year_published: this.state.year_published, author: this.state.author};
        BookService.createBook(book)
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col -md-6">
                            <h3 className="text-center">Add Book</h3>
                            <div className = "card-body">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                <div className = "form-group">
                                    ISBN:
                                    <input 
                                        name="isbn"
                                        type="text" 
                                        value={this.state.isbn} 
                                        onChange={this.changeISBNHandler} />
                                </div>
                                </label>
                                <label>
                                <div className = "form-group">
                                    Copies Sold:
                                    <input 
                                        name = "copies"
                                        type="text" 
                                        value={this.state.copiesSold} 
                                        onChange={this.changeCopiesSoldHandler} />
                                </div>
                                </label>
                                <label>
                                <div className = "form-group">
                                    Description:
                                    <input 
                                        name="description"
                                        type="text" 
                                        value={this.state.description} 
                                        onChange={this.changeDescriptionHandler} />
                                </div>        
                                </label>
                                <label>
                                <div className = "form-group">
                                    Genre:
                                    <select 
                                        name="genre"
                                        value={this.state.genre} 
                                        onChange={this.changeGenreHandler}>
                                            <option value="sci-fi">Sci-Fi</option>
                                            <option value="fantasy">Fantasy</option>
                                            <option value="historical-fiction">Historical Fiction</option>
                                            <option value="romance">Romance</option>
                                            <option value="horror">Horror</option>
                                            <option value="biography">Biography</option>
                                            <option value="reference">Reference</option>
                                            <option value="history">History</option>
                                            <option value="science">Science</option>
                                    </select>
                                </div>
                                </label>
                                <label>
                                <div className = "form-group">
                                    Price:
                                    <input 
                                        name="price"
                                        type="text" 
                                        value={this.state.price} 
                                        onChange={this.changePriceHandler} />
                                </div>
                                </label>
                                <label>
                                <div className = "form-group">
                                    Title:
                                    <input 
                                        type="text" 
                                        value={this.state.title} 
                                        onChange={this.changeTitleHandler} />
                                </div>
                                </label>
                                <label>
                                <div className = "form-group">
                                    Year Published:
                                    <input 
                                        type="text" 
                                        value={this.state.year_published} 
                                        onChange={this.changeYearPublishedHandler} />
                                </div>
                                </label>
                                <label>
                                <div className = "form-group">
                                    Author ID:
                                    <input 
                                        type="text" 
                                        value={this.state.author} 
                                        onChange={this.changeAuthorHandler} />
                                </div>
                                </label>
                                <input className="btn" type="submit" value="Submit" />
                                <Link className="btn" to="/">Cancel</Link>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default CreateBookComponent
