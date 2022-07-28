import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/api/v1/books"
class BookService {

    getTopTen() {
        return axios.get(BOOK_API_BASE_URL +"/top-ten");
    }

    createBook(book) {
        return axios.post(BOOK_API_BASE_URL +"/create", book)
    }
}

export default new BookService()