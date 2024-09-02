export interface RootMenu{
    created_at: string;
    id: string;
    name: string;
    parent?: string;
    updated_at: string
}

export interface RootApiResponse{
    status: number;
    menus: RootMenu[]
}