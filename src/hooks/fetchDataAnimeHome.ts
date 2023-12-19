import AnimeTopRepository from "@/repositories/animeTopRepository";
import AnimeSeasonsRepository from "@/repositories/animeSeasonsRepository";
import AnimeRepository from "@/repositories/animeRepository";

export async function fetchDataAnimeHome() {
    const animeTopRepository = new AnimeTopRepository();
    const animeSeasonsRepository = new AnimeSeasonsRepository();
    const animeRepository = new AnimeRepository();

    try {
        return await Promise.all([
            animeTopRepository.getAll({page: 1, limit: 10}),
            animeSeasonsRepository.getSeasonsNow({page: 1, limit: 10}),
            animeRepository.getAll({page: 1, limit: 10, order_by: "popularity"}),
        ])

    } catch (err) {
        console.error('Error fetching data:', err);
    }
}
