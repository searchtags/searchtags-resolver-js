interface SearchTagAlias
{
    type: 'alias';
    reference: string;
}

interface SearchTagDescription
{
    type: 'description';
    name: string;
    searchUrls: object;
}

type SearchTagItem = SearchTagAlias | SearchTagDescription;

class Resolver
{
    searchTags: any;
    
    constructor(searchTagsList: any) {
        this.searchTags = searchTagsList.items;
    }

    hasItem(shortcut: string): boolean {
        return !!this.searchTags[shortcut];
    }

    getItem(shortcut: string): SearchTagItem {
        const itemData = this.searchTags[shortcut];

        if ('alias' == itemData.type) {
            return {
                type: itemData.type,
                reference: itemData.reference
            } as SearchTagAlias;
        }

        if ('description' == itemData.type) {
            return {
                type: itemData.type,
                name: itemData.name,
                searchUrls: itemData.searchUrls
            } as SearchTagDescription;
        }

        throw new TypeError('Unknown type: ' + itemData.type);
    }

    resolve(shortcut: string, query: string, languages: Array<string> = ['en']): string | null {
        if (!this.hasItem(shortcut)) {
            return null;
        }

        const item = this.getItem(shortcut);

        if ('alias' === item.type) {
            return this.resolve(item.reference, query, languages);
        }

        for (let key in languages) {
            const language = languages[key];
            if (item.searchUrls[language]) {
                return item.searchUrls[language].replace('{{s}}', encodeURIComponent(query));
            }
        }

        return null;
    }
}

export default Resolver;
