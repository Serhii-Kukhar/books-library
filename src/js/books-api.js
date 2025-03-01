
const API_KEY = 'AIzaSyC-JY0xvcs1AAv7UMgr_J7gs0-baZ74Isw';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function searchBooks(query) {
    try {
        const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}&langRestrict=uk&key=${API_KEY}`);
        const data = await response.json();
        
        if (data.items) {
            return data.items.map(book => ({
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors || ['Невідомий автор'],
                description: book.volumeInfo.description || 'Опис відсутній',
                link: book.volumeInfo.infoLink,
                image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null  // Додаємо поле image
            }));
        } else {
            return [];
        }
    } catch (error) {
        console.error('Помилка при запиті до Google Books API:', error);
        return [];
    }
}


// Приклад використання
searchBooks('Шевченко').then(books => console.log(books));





