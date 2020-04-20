
const calculate = salary => {
    let gross=parseInt(salary);
    let personalAllowance=12509;
    let basicRate=50000;
    let higherRate=150000;
    let netSalary=0;
    let taxPaid=0;
    let firstBracket=0;
    let secondBracket=0;
    let thirdBracket=0;
    let firstNiBracket=0;
    let secondNiBracket=0;
    let nationalInsurance=0;

    if(gross>8632){
        if(gross<=50024){
        firstNiBracket=gross-8632;
        }
        if(gross>50024){
            firstNiBracket=50024-8632;
        }
    }
    if(gross>50024){
        secondNiBracket=gross-50024;
    }


    if(gross>personalAllowance ){
        if(gross<=basicRate){
            firstBracket=gross-personalAllowance;
        }
        if(gross>basicRate){
            firstBracket=basicRate-personalAllowance;
        } 
    }
    if(gross>basicRate){
        if(gross<=higherRate){
            secondBracket=gross-basicRate;
        }
        if(gross>higherRate){
            secondBracket=higherRate-basicRate;
        }
    }
    if(gross>higherRate){
        thirdBracket=gross-higherRate;
    }


    function percentageOf(num, per)
    {
    return ((num/100)*per);
    }

    let firstNi=percentageOf(firstNiBracket,12);
    let secondNi=percentageOf(secondNiBracket,2);

    nationalInsurance=firstNi+secondNi;

    let firstTax=percentageOf(firstBracket,20);
    let secondTax=percentageOf(secondBracket,40);
    let thirdTax=percentageOf(thirdBracket,45);

    taxPaid=firstTax+secondTax+thirdTax;

    let finalNi=nationalInsurance;

    netSalary=gross-taxPaid-finalNi;

    return {salary: netSalary.toFixed(2), tax: taxPaid.toFixed(2), ni: finalNi.toFixed(2)}
}

export {calculate};