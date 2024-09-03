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

export interface UpdateRequest{
    id: string;
    name: string
}

export interface DeleteRequest{
    id: string;
}

export interface InsertRequest{
    name: string;
    parent?: string | null
}