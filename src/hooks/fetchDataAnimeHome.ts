import AnimeTopJikan from "@/repositories/animeTopJikan";
import AnimeSeasonsJikan from "@/repositories/animeSeasonsJikan";
import AnimeJikan from "@/repositories/animeJikan";
import AnimeKitsu from "@/repositories/animeTrendingKitsu";

export async function fetchDataAnimeHome() {
    const animeTopRepository = new AnimeTopJikan();
    const animeSeasonsRepository = new AnimeSeasonsJikan();
    const animeRepository = new AnimeJikan();
    const animeTrendingKitsu = new AnimeKitsu();

    try {
        return await Promise.all([
            animeTopRepository.getAll({page: 1, limit: 10}),
            animeSeasonsRepository.getSeasonsNow({page: 1, limit: 10}),
            animeRepository.getAll({page: 1, limit: 10, order_by: "popularity"}),
            animeTrendingKitsu.getAnimeTrending({'page[offset]': 0, 'page[limit]': 5}),
        ])

    } catch (err) {
        console.error('Error fetching data:', err);
    }
}
