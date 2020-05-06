declare global {
    interface Icontriller {
        (req : any, res : any) : Promise <any>;
    }
}

export {}