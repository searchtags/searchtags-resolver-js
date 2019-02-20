# Open Search Tags: Resolver (JavaScript)

This is a **JavaScript** library to generate URLs to search engines by given name or shortcut.
"Open Search Tags" is heavily inspired by [DuckDuckGo's bangs][1] and also [Ecosia's search tags][2].
Using those techniques you can easier access other search engines by using specific aliases.

## Usage

```html
<script src="dist/searchTagResolver.js"></script>
<script>
    let url = 'https://searchtags.github.io/';

    // Searching Google (shortcut is "g") for "Steve Jobs":
    url = searchTagsResolver.resolve('g', 'Steve Jobs', ['en', 'en_US', 'de']);
    url = searchTagsResolver.resolve('google', 'Steve Jobs', ['en', 'en_US', 'de']);

    // Searching amazon.de (shortcut is "a") for "SD Card":
    url = searchTagsResolver.resolve('a', 'sd card', ['de']);
    url = searchTagsResolver.resolve('amazon', 'sd card', ['de']);

    // Searching Ecosia (shortcut is "eco") for trees:
    url = searchTagsResolver.resolve('eco', 'trees');
    url = searchTagsResolver.resolve('ecosia', 'trees');

    // Searching 9GAG (shortcut is "9") for cats:
    url = searchTagsResolver.resolve('9', 'cats');
    url = searchTagsResolver.resolve('9gag', 'cats');

    // Searching Google Maps (shortcut is "gm") for Cologne:
    url = searchTagsResolver.resolve('gm', 'Cologne');
    url = searchTagsResolver.resolve('googlemaps', 'Cologne');
</script>
```

## Available shortcuts and search engines

Please have a look at [Open Sarch Tags' list][3] to see all supported search engines.

[1]: https://duckduckgo.com/bang "DuckDuckGo's bangs"
[2]: https://ecosia.zendesk.com/hc/en-us/articles/201657321-What-are-search-tags- "Ecosia search tags"
[3]: https://github.com/searchtags/searchtags-list/blob/master/searchtags.json "Open Search Tags: List"
