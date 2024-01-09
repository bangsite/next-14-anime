import ApiFactory from "./apiFactory";
import {ApiResponse} from "@/types/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

class AnimeJikan {
    private apiFactory: ApiFactory;

    constructor() {
        this.apiFactory = new ApiFactory(`${API_URL}`);
    }

    async getAnimeById(id: number, params?: Record<string, any>): Promise<ApiResponse> {
        return this.apiFactory.get<ApiResponse>(`anime/${id}`, params);
    }

}

export default AnimeJikan;
