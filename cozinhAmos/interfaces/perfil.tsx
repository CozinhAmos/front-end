export default interface Perfil {
    id: string,
    followId: string,
    name: string,
    _count: {
        followers: number,
        following: number,
        recipes: number,
        likedRecipes: number,
    }
}