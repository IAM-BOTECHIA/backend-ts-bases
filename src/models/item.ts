export class Item {


    constructor(
        private id: string,
        private title: string,
        private description: string,
        private price: number,
        private image: string,
        private userId: string,
        private createdAt: string
    ) { }

    public getId(): string {
        return this.id
    }
}