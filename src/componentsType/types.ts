export interface AstronomyImage {
    copyright: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: string
    url: string
}

export interface LinkImage {
    rel: string
    render: string
    href: string
}

export interface LinkAsset {
    href: string
    rel: string
    prompt: string
}

export interface NasaAsset {
    date_created: string
    nasa_id: string
    keywords: string[]
    photographer: string
    description: string
    media_type: "image" | "audio"
    title: string
    center: string
    location: string
    album: string[]
}

export interface NasaImageResult {
    "links": LinkImage[]
    "href": string
    "data": NasaAsset[]
}

export interface NasaMetadata {
    total_hits: number
}

export interface ImageResult {
    nasa_id: string;
    secondary_creator: string;
    description_508: string;
    center: string;
    date_created: string;
    title: string;
    location: string;
    photographer: string;
    keywords: string[];
    media_type: string;
    description: string;
}

export interface NasaItem {
    data: ImageResult[]
}

export interface NasaSearchCollection {
    href: string
    items: NasaItem[]
    version: string
    links: LinkAsset[]
    metadata: NasaMetadata
}

export interface NasaSearchResult {
    collection: NasaSearchCollection
}