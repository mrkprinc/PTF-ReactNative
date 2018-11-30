export function trim(str, numberOfWords) {
  let words = str.split(/,?\s/);
  if(words.length <= numberOfWords) {
    return str;
  } else {
    return words.slice(0, numberOfWords).join(' ') + '...';
  }
}