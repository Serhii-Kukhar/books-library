export function renderBooks(books) {
    const container = document.getElementById('books-container');
    container.innerHTML = '';
    
    if (books.length === 0) {
        container.innerHTML = '<p>Нічого не знайдено</p>';
        return;
    }
    
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        
        // Перевіряємо, чи є зображення обкладинки
        const imageUrl = book.image ? book.image : 'path/to/default/image.jpg'; // Заміни на шлях до стандартного зображення, якщо обкладинка відсутня
        
        bookElement.innerHTML = `
            <img class="book-img" src="${imageUrl}" alt="Обкладинка книги"  />

            <h3>${book.title}</h3>
            <p><strong>Автор:</strong> ${book.authors.join(', ')}</p>
            
            <a href="${book.link}" target="_blank">Детальніше</a>
        `;
        
        container.appendChild(bookElement);
    });
}