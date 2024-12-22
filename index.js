const modal = document.getElementById("myModal")
const openModal = document.getElementById("add-book")
const closeModal = document.getElementById("close-modal")
const form = document.getElementById("add-book-form")

openModal.onclick = () => modal.style.display = "block"
closeModal.onclick = () => modal.style.display = "none"

const BoardController = (function(){
    const board = []

    const getBoard = () => board

    function FormHandler(){
        const formData = new FormData(form)
    
        
    }

    const addBook = () => {
        board.push(createBook())
    }
})()




function createBook(title, pages, author, date){
    const bookTitle = title
    const bookPages = pages
    const bookAuthor = author
    const BookDate = date

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

})()