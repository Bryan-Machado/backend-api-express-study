const zodErrorParser = (error) => {
    const errorFormatted = error.format();
    delete errorFormatted._errors
    for (let field in errorFormatted) {
        errorFormatted[field] = {messages: errorFormatted[field]._errors}
    }
}

export default zodErrorParser