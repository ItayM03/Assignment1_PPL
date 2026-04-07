import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels = (s: string): number => {
    const filter_vowels = R.filter((char : string) => vowels.includes(char), stringToArray(s));
    // const vowel_sum = R.reduce((acc : number, cur : string) => acc + 1, 0, filter_vowels);
    return R.length(filter_vowels);
};

/* Question 2.2 */
const isLetter = (char: string) : boolean => /^[a-zA-Z]$/.test(char);
export const isPalindrome = (text: string): boolean => {
    const onlyLetters = R.filter((char : string) => isLetter(char), stringToArray(text));
    return false;
};
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => undefined as any;;
