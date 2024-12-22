const modal = document.getElementById("myModal")
const openModal = document.getElementById("add-book")
const closeModal = document.getElementById("close-modal")

openModal.onclick = () => modal.style.display = "flex"
closeModal.onclick = () => modal.style.display = "none"

const BoardController = (function(){
    const board = []

    const getBoard = () => board

    const addBook = (e) => {
        e.preventDefault()

        const formData = new FormData(form)
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
    const board = BoardController.getBoard()
    const form = document.getElementById("add-book-form")

    const addBook = (e) => {
        e.preventDefault()

        const formData = new FormData(form)
        board.push(createBook(formData.values()))

        console.log(board)
    }

    form.addEventListener("submit", addBook)

    
})()
