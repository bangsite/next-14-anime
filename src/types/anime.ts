export interface ImageType {
    "jpg": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
    },
    "webp": {
        "image_url": "string",
        "small_image_url": "string",
        "large_image_url": "string"
    }
}

export interface Anime {
    mal_id: string;
    title: string;
    title_english: string;
    images: ImageType;
    type: string;
    episodes: number;
    favorites: number;
    score: number;
    season?: string,
    status: string,
    year: number,
}
