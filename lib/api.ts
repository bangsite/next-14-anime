
const API_URL=process.env.NEXT_PUBLIC_API_URL;

export const getListAnimes = async (page: number,) => {
    const response = await fetch(`${API_URL}/animes?page=${page}&limit=8&order=popularity`);

    return  await response.json();
}
