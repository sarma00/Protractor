let homepage = function(){
    let firstElement = element(by.model('first'));
    let secondElement = element(by.model('second'));
    let button = element(by.css('[ng-click="doAddition()"]'))

    this.openURL = function(url){
        browser.get(url);
    }
    this.enterFirstNumber = function(firstNum){
        firstElement.sendKeys(firstNum);
    }
    
    this.enterSecondNumber = function(secondNum){
        secondElement.sendKeys(secondNum);
    }

    this.selectOperator = function(operator){
        switch(operator){
            case 'add':
                element(by.cssContainingText('option','+')).click();
                break;
            case 'substract':
                element(by.cssContainingText('option','-')).click();
                break;
            case 'divide':
                element(by.cssContainingText('option','/')).click();
                break;
            case 'multiply':
                element(by.cssContainingText('option','*')).click();
                break;
        }
    }

    this.clickGoBtn = function(){
        button.click();
    }

    this.verifyResults=function (output){
        let result =  element(by.cssContainingText('.ng-binding',output));
       // expect(result.getText()).toEqual(output);
    }        
    
};

module.exports = new homepage();