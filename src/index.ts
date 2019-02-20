/*!
 * searchtags-resolver-js
 * Open Search Tags (c) by Timon F. <dev@timonf.de>
 * Licensed under MIT
 */
import * as searchTagList from 'searchtags-list';
import Resolver from './resolver';

const resolver = new Resolver(searchTagList);

export function resolve(shortcut: string, query: string, languages: Array<string> = ['en']): string | null {
    return resolver.resolve(shortcut, query, languages);
}
