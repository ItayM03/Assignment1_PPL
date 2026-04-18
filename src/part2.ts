import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels = (s: string): number => {
    const filter_vowels: string[] = R.filter((char : string) => vowels.includes(char), stringToArray(R.toLower(s)));
    return R.length(filter_vowels);
};

/* Question 2.2 */
const isLetter = (char: string) : boolean => /^[a-zA-Z0-9]$/.test(char);

export const isPalindrome = (text: string): boolean => {
    const onlyLetters = R.filter((char : string) => isLetter(char), stringToArray(R.toLower(text)));
    const reverseString = R.reduceRight((acc, cur) => cur + acc, "");
    
    return R.join("", onlyLetters) === reverseString(onlyLetters);
};  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string =>
    R.pipe(
        (tree: WordTree) => tree.children,
        R.map(treeToSentence),
        R.prepend(t.root),
        R.join(' ')
    )(t);
