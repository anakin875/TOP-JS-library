import { createBook } from "./book"

export function LibraryController(){
    const board = []

    const getBoard = () => board
    
    const pushBook = (formData) => {
        board.push(createBook(formData.values()))
    }

    const deleteBook = (index) => {
        board.splice(index)
    }
    return{
        getBoard,
        pushBook,
        deleteBook
    }
}
