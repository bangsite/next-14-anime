import {Anime} from "@/types/anime";
import ApiFactory from "./apiFactory";
import {ApiResponse} from "@/types/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(API_URL)

class AnimeSeasonsRepository {
    private apiFactory: ApiFactory;

    constructor() {
        this.apiFactory = new ApiFactory(`${API_URL}`);
    }

    async getSeasonsNow(params?: Record<string, any>): Promise<ApiResponse> {
        console.log('params:::',params)
        return this.apiFactory.get<ApiResponse>('seasons/now', params);
    }

    async getSeasonByYear(year: string,seasons:string): Promise<ApiResponse> {
        return await this.apiFactory.get<ApiResponse>(`seasons/${year}/${seasons}`);
    }
}

export default AnimeSeasonsRepository;
