export interface CoverImage {
    tiny: string,
    large: string,
    small: string,
    original: string,
    meta: {}
}

export interface PosterImage {
    tiny: string,
    large: string,
    small: string,
    original: string,
    meta: {}
}

export interface Title {
    en: string,
    en_jp: string,
    ja_jp: string
}

export  interface Attribute{
    slug:string,
    synopsis: string,
    createdAt: string,
    updatedAt: string,
    titles:Title,
    coverImage: CoverImage;
    posterImage: PosterImage;
    youtubeVideoId: string;
    showType: string;
    episodeCount: number;
    episodeLength: number;
    favoritesCount: number;
    userCount: number;
    ratingRank: number;
    status: string,
}

export interface AnimeKitsu {
    id: number;
    type: string;
    attributes:Attribute,
}
