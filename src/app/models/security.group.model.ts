export class SecurityGroup {
    id?: string; // Firebase key
    name: string;

    constructor(
        id: string = '',
        name: string = ''
    ) {
        this.id = id;
        this.name = name;
    }
}
