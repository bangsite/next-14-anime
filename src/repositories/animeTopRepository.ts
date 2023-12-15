import {Anime} from "@/types/anime";
import ApiFactory from "./apiFactory";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(API_URL)

class AnimeTopRepository {
    private apiFactory: ApiFactory;

    constructor() {
        this.apiFactory = new ApiFactory(`${API_URL}`);
    }

    async getAll(params?: Record<string, any>): Promise<Anime[]> {
        console.log('params:::',params)
        return this.apiFactory.get<Anime[]>('top/anime', params);
    }


    async getById(id: string): Promise<Anime> {
        return await this.apiFactory.get<Anime>(`top/anime/${id}`);
    }
}

export default AnimeTopRepository;
