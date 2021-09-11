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