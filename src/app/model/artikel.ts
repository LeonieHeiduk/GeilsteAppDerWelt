export interface IArtikel {
    id: string
    titel: string
    teaser?: string
    text: string
    autor: string
    bild?: string
    // reference
    kommentare?: string[]
    // embedded
    kategorien?: string[]
    likes?: string[]
    tags?: string[]
}