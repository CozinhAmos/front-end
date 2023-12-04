export default interface Receita {
    id: string,
    name: string,
    likes: number,
    User: {
        id: string,
        name: string,
    }
}