export function useHelpers() {
    const addSpacesToNumber = (number) => {
        if (number == null) number = '0';
        
        if (typeof number !== 'string') number = number.toString();
        
        number = number.split('.');
        number[0] = number[0].replace(/\s/g, '');
        number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        number = number.join('.');
        
        return number;
    };
    
    
    const declineWord = (number, word1, word2, word5, spaceForNumber = false, onlyText = false) => {
        const abs = Math.abs(number);
        const lastDigit = abs % 10;
        if (abs % 100 >= 11 && abs % 100 <= 19) {
            if (onlyText) {
                return word5;
            }
            return spaceForNumber ? addSpacesToNumber(+number) + ' ' + word5 : number + ' ' + word5;
        }
        else if (lastDigit === 1) {
            if (onlyText) {
                return word1;
            }
            return spaceForNumber ? addSpacesToNumber(+number) + ' ' + word1 : number + ' ' + word1;
        }
        else if (lastDigit >= 2 && lastDigit <= 4) {
            if (onlyText) {
                return word2;
            }
            return spaceForNumber ? addSpacesToNumber(+number) + ' ' + word2 : number + ' ' + word2;
        }
        else {
            if (onlyText) {
                return word5;
            }
            return spaceForNumber ? addSpacesToNumber(+number) + ' ' + word5 : number + ' ' + word5;
        }
    };
    
    const truncatedText = (str, count = 100) => {
        const words = str.split(' ');
        if (words.length > count) {
            return words.slice(0, count).join(' ') + '...';
        }
        return str;
    };
    
    return {
        declineWord,
        addSpacesToNumber,
        truncatedText,
    };
}