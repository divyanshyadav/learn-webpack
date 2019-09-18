const createPerson = (name) => {
    const n = name

    return {
        setName: (newName) => {
            n = newName
        },

        getName: () => {
            return n
        }
    }
}

export default createPerson