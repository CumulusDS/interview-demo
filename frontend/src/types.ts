export type CategoryItemId = string;
export type TagId = string;

export type CategoryItem = {
    id: CategoryItemId;
    name: string;
    description: string;
    icon?: string | null;
    tags: TagId[];
    category: CategoryId
}

export type CategoryId = string;

export type Category = {
    id: CategoryId
    name: string
}

export type Tag = {
    id: TagId
    primary: string
    aliases: string[]
}

export type CatalogConfig = {
    title: string
    categories: Category[]
    items: CategoryItem[]
    tags: Tag[]
    prompt?: string
    actions: {
        add: string
        cancel: string
        callback: (item: CategoryItemId | null) => void
    },
    columns?: 1 | 2
}

export type CatalogPayload = {
    categories: Category[]
    items: CategoryItem[]
    tags: Tag[]
}
