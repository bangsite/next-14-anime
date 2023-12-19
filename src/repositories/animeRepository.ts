import {Anime} from "@/types/anime";
import ApiFactory from "./apiFactory";
import {ApiResponse} from "@/types/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(API_URL)

class AnimeRepository {
    private apiFactory: ApiFactory;

    constructor() {
        this.apiFactory = new ApiFactory(`${API_URL}`);
    }

    async getAll(params?: Record<string, any>): Promise<ApiResponse> {
        return this.apiFactory.get<ApiResponse>('anime', params);
    }

}

export default AnimeRepository;
