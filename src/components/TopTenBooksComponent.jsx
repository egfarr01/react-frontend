import React, { Component } from 'react';
import BookService from '../services/BookService';
import { Link } from 'react-router-dom';


class ListBooksComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        BookService.getTopTen().then((res) => {
            this.setState({ books: res.data})
        });
    }

    render() {
        return (
            <div>
                <div className = "row">
                    <Link className="btn" to="/create-book">Add a Book!</Link>
                </div>
                <h2 className="header">Top Ten Bestsellers</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Copies Sold</th>
                                <th>Description</th>
                                <th>Genre</th>
                                <th>Price</th>
                                <th>Title</th>
                                <th>Year Published</th>
                                <th>Author</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr key = {book.isbn}>
                                        <td>{book.copiesSold}</td>
                                        <td>{book.description}</td>
                                        <td>{book.genre}</td>
                                        <td>{book.price}</td>
                                        <td>{book.title}</td>
                                        <td>{book.year_published}</td>
                                        <td>{book.author.first_name + " " +     book.author.last_name}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListBooksComponent;