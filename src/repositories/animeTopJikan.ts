import {Anime} from "@/types/anime";
import ApiFactory from "./apiFactory";
import {ApiResponse} from "@/types/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

class AnimeTopJikan {
    private apiFactory: ApiFactory;

    constructor() {
        this.apiFactory = new ApiFactory(`${API_URL}`);
    }

    async getAll(params?: Record<string, any>): Promise<ApiResponse> {
        return this.apiFactory.get<ApiResponse>('top/anime', params);
    }


    async getById(id: string): Promise<ApiResponse> {
        return await this.apiFactory.get<ApiResponse>(`top/anime/${id}`);
    }
}

export default AnimeTopJikan;
