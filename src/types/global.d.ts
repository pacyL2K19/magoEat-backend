declare global {
    interface Icontoller {
        (req : any, res : any) : Promise <any>;
    }
}

export {}