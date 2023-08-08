
export interface ICrumb {
    id: number;
    path: string;
    name?: string;
    color?: string;
    skip?: boolean;
    parent?: string;
    disabled?: boolean;
    resolve?: string;
    async?: Promise<ICrumb>;
}
