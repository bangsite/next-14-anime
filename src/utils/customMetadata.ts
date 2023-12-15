interface PageMetaData {
    title: string;
    description: string;
}


function customMetaData(path: string): PageMetaData {
    const metaData: Record<string, PageMetaData> = {
        '/': {
            title: "Discover the Fascinating World of Anime | Home page",
            description: "Explore the enchanting universe of anime at animes.com . Immerse yourself in captivating stories, vibrant characters, and breathtaking animation.",
        },
        '/animes': {
            title: "Discover the Fascinating World of Anime | Animes list page",
            description: "Explore the enchanting universe of anime at animes.com . Immerse yourself in captivating stories, vibrant characters, and breathtaking animation.",
        },
    };

    return metaData[path] || { title: 'Discover the Fascinating World of Anime | Your Ultimate Anime Destination', description: 'Explore the enchanting universe of anime at animes.com . Immerse yourself in captivating stories, vibrant characters, and breathtaking animation.' };
}

export default customMetaData;

