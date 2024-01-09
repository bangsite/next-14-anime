import {Anime} from "@/types/anime";
import ApiFactory from "./apiFactory";
import {ApiResponse} from "@/types/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

class AnimeSchedulesJikan {
    private apiFactory: ApiFactory;

    constructor() {
        this.apiFactory = new ApiFactory(`${API_URL}`);
    }

    async getAnimeSchedules(params?: Record<string, any>): Promise<ApiResponse> {
        return this.apiFactory.get<ApiResponse>('schedules', params);
    }

}

export default AnimeSchedulesJikan;
