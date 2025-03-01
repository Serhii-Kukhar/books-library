import { searchBooks } from './js/books-api';
import { renderBooks } from './js/render-function';




searchBooks('Роксолана').then(books => {
    renderBooks(books);
});
