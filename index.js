const modal = document.getElementById("myModal")
const openModal = document.getElementById("add-book")
const closeModal = document.getElementById("close-modal")

openModal.onclick = () => modal.style.display = "flex"
closeModal.onclick = () => modal.style.display = "none"

const BoardController = (function(){
    const board = []

    const getBoard = () => board
    
    const addBook = (formData) => {
        board.push(createBook(formData.values()))
    }

    return{
        getBoard,
        addBook
    }
})()

function createBook(bookFormData){

    const bookData = []

    for(let value of bookFormData){
        bookData.push(value)
    }

    const bookTitle = bookData[0]
    const bookPages = bookData[1]
    const bookAuthor = bookData[2]
    const BookDate = bookData[3]

    const status = "NO"

    const getStatus = () => status
    const changeStatus = () => {
        status === "NO" ? "YES" : "NO"
    }

    return {
        bookTitle,
        bookPages,
        bookAuthor,
        BookDate,
        getStatus,
        changeStatus
    }
}

const ScreenController = (function(){
    const form = document.getElementById("add-book-form")

    const displayBook = () => {
        const board = BoardController.getBoard()
        const libraryDiv = document.getElementById("library")
        libraryDiv.textContent = ""
        board.forEach((book, index) =>{
            const bookCell = document.createElement("div")
            bookCell.classList.add("book")
            bookCell.dataset.index = index
            bookCell.textContent = book.bookTitle
            libraryDiv.appendChild(bookCell)
        })
    }

    const clickHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        BoardController.addBook(formData)
        displayBook()
    }

    form.addEventListener("submit", clickHandler)

    
})()
