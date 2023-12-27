function calculateFees(provider) {
    const amountInput = document.getElementById('amountInput');
    const resultElement = document.getElementById('result');
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultElement.innerText = 'Please enter a valid amount.';
        return;
    }

    let feePercentage, feeFixed, total;

    switch (provider) {
        case 'paypal':
            feePercentage = 3.49;
            feeFixed = 0.49;
            break;
        case 'stripe':
            feePercentage = 2.9;
            feeFixed = 0.30;
            break;
        case 'gumroad':
            feePercentage = 10;
            feeFixed = 0;
            break;
        case 'etsy':
            feePercentage = 6.5;
            feeFixed = 0.25;
            break;
        default:
            resultElement.innerText = 'Invalid provider.';
            return;
    }

    const feeAmount = (amount * feePercentage / 100) + feeFixed;
    total = amount - feeAmount;

    resultElement.innerText = `Sale Amount: $${amount.toFixed(2)}\nFees: $${feeAmount.toFixed(2)} (${feePercentage.toFixed(2)}%)\nTotal After Fees: $${total.toFixed(2)}`;
}
