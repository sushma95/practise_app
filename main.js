function Tipsandtaxcalc() {
    
    
    const total = parseFloat(document.querySelector('#field_total').value)
    const tipRate = parseFloat(document.querySelector('#field_rate').value)

    const tip_total = total * (tipRate/100)
    const taxRate = 5.5
    const tax_total = total * (taxRate/100)
    const grand_Total = total + tip_total +  tax_total

    document.querySelector('#tip-amount').innerHTML = `$${tip_total.toFixed(2)}`
    document.querySelector('#total_taxamount').innerHTML = `$${tax_total.toFixed(2)}`
    document.querySelector('#Grand-amount').innerHTML = `$${grand_Total.toFixed(2)}`
}


document.querySelector('#calc_result').addEventListener('click', Tipsandtaxcalc)

