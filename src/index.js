function getCardType(cardNumber) {
    const cardTypes = [
        { name: 'American Express', patterns: [/^34/, /^37/], length: [15] },
        { name: 'Diners Club - Carte Blanche', patterns: [/^300/, /^301/, /^302/, /^303/, /^304/, /^305/], length: [14] },
        { name: 'Diners Club - International', patterns: [/^36/], length: [14] },
        { name: 'MasterCard', patterns: [/^5[1-5]/, /^2221[0-9]/, /^222[2-9][0-9]/, /^22[3-9][0-9]{2}/, /^2[3-6][0-9]{3}/, /^27[01][0-9]/, /^2720/], length: [16] },
        { name: 'Visa', patterns: [/^4/], length: [13, 16, 19] },
        { name: 'Visa Electron', patterns: [/^4026/, /^417500/, /^4508/, /^4844/, /^4913/, /^4917/], length: [16] }
    ];

    for (const cardType of cardTypes) {
        if (cardType.patterns.some(pattern => pattern.test(cardNumber)) && cardType.length.includes(cardNumber.length)) {
            return cardType.name;
        }
    }
    return 'Unknown';
}

function validateCreditCard(cardNumber) {
    const cardType = getCardType(cardNumber);
    if (cardType === 'Unknown') {
        return { valid: false, bandeira: null };
    }
    return { valid: true, bandeira: cardType };
}

// Example usage:
const cardNumber = '4111111111111111';
const validation = validateCreditCard(cardNumber);
console.log(validation); // { valid: true, bandeira: 'Visa' }
