const ENDPOINT = 'https://6431ac27d4518cfb0e66d65c.mockapi.io/users';

export const getUsers = async () => {
    try {
        const response = await fetch(ENDPOINT);
        return response.json();
    } catch (error) {
       throw new Error('not found users'); 
    }
}