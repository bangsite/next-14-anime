export interface Anime {
    id: string;
    title: string;
    title_english: string;
    image: {
        jpg: string;
        webp: string;
    };
    type: string;
    episodes: number;
    favorites: number;
    score: number;
    season: string,
    status: string,
    year: number,
}
