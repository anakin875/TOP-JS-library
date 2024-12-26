import { LibraryController } from "./library_controller"
import "./styles.css"

export function ScreenController(){
    const library = LibraryController()

    const form = document.getElementById("add-book-form")
    const addBtn = document.getElementById("add-book")
    const modal = document.getElementById("myModal")
    
    const displayBook = () => {
        const board = library.getBoard()

        const libraryDiv = document.getElementById("library")
        libraryDiv.textContent = ""

        board.forEach((book, index) =>{
            const bookCell = document.createElement("div")
            const title = document.createElement("p")
            const author = document.createElement("p")
            const pages = document.createElement("p")
            const date = document.createElement("p")
            const removeBtn = document.createElement("button")


            bookCell.classList.add("book")
            bookCell.dataset.index = index

            removeBtn.classList.add("btn")
            removeBtn.textContent = "Remove"
            removeBtn.addEventListener("click", removeBook)

            title.textContent = book.bookTitle
            author.textContent = book.bookAuthor
            pages.textContent = book.bookPages
            date.textContent = book.bookDate
            
            bookCell.appendChild(title)
            bookCell.appendChild(author)
            bookCell.appendChild(pages)
            bookCell.appendChild(date)

            bookCell.appendChild(removeBtn)

            libraryDiv.appendChild(bookCell)

        })
    }

    const addBook = (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        library.pushBook(formData)
        displayBook()
        displayModal()
    }

    const removeBook = (e) => {
        const board = library.getBoard()
        const parent = e.target.closest(".book")
        const index = parent.dataset.index

        library.deleteBook(index)

        parent.remove()
    }

    const displayModal = () => {
        modal.style.display !== "flex" ?
        modal.style.display = "flex" : 
        modal.style.display = "none"
    }

    addBtn.addEventListener("click", displayModal)
    form.addEventListener("submit", addBook)
}