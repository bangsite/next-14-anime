import AnimeTrendingKitsu from "@/repositories/animeTrendingKitsu";
import AnimeTopJikan from "@/repositories/animeTopJikan";
import AnimeSeasonsJikan from "@/repositories/animeSeasonsJikan";
import AnimeSchedulesJikan from "@/repositories/animeSchedulesJikan";

export async function fetchDataAnimeHome() {
    const animeTrendingKitsu = new AnimeTrendingKitsu();
    const animeTopJikan = new AnimeTopJikan();
    const animeSchedulesJikan = new AnimeSchedulesJikan();
    const animeSeasonsJikan = new AnimeSeasonsJikan();

    try {
        return await Promise.all([
            animeTrendingKitsu.getAnimeTrending({'page[offset]': 0, 'page[limit]': 5}),
            animeTopJikan.getTopAnime({page: 1, limit: 10}),
            animeSeasonsJikan.getSeasonsNow({page: 1, limit: 10}),
            animeSchedulesJikan.getAnimeSchedules({page: 1, limit: 10}),
        ])

    } catch (err) {
        console.error('Error fetching data:', err);
    }
}
