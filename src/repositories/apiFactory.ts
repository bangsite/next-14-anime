class ApiFactory {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private buildQueryString(params: Record<string, any>): string {
        const queryString = Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');

        return queryString ? `?${queryString}` : '';
    }

    async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
        const queryString = params ? this.buildQueryString(params) : '';
        const response = await fetch(`${this.baseUrl}/${endpoint}${queryString}`);

        return response.json();
    }

    async post<T>(endpoint: string, data: any): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }

    async update<T>(endpoint: string, id: string, data: any): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${endpoint}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }

    async delete<T>(endpoint: string, id: string): Promise<T> {
        const response = await fetch(`${this.baseUrl}/${endpoint}/${id}`, {method: 'DELETE',});

        return response.json();
    }
}

export default ApiFactory;
