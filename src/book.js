export function createBook(bookFormData){

    const bookData = []

    for(let value of bookFormData){
        bookData.push(value)
    }

    const bookTitle = bookData[0]
    const bookPages = bookData[1]
    const bookAuthor = bookData[2]
    const bookDate = bookData[3]

    const status = "NO"

    const getStatus = () => status
    const changeStatus = () => {
        status === "NO" ? "YES" : "NO"
    }

    return {
        bookTitle,
        bookPages,
        bookAuthor,
        bookDate,
        getStatus,
        changeStatus
    }
}