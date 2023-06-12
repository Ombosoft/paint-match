export function tokenize(str, component) {
    const Component = component || 'span';
    return str.split(wordRe).map(word => <Component key={'i' + word}>{word + " "}</Component>);
}

const wordRe = /\s/;

