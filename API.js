export async function getCharacters() {
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const responseJSON = await response.json();
        return responseJSON
    }
    catch(err){
        console.log(err);
    }
}