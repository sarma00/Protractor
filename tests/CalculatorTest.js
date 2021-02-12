describe('Calculator test demo',function(){
    let firstElement = element(by.model('first'));
    let secondElement = element(by.model('second'));
    let button = element(by.css('[ng-click="doAddition()"]'))
    
    it('addition test',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        firstElement.sendKeys('15');
        secondElement.sendKeys('10');
        button.click();
        let result =  element(by.cssContainingText('.ng-binding','25'));
        console.log('Addition tests passed');
        browser.sleep(2000);
    }); 

    it('substraction test demo',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        firstElement.sendKeys('10');
        secondElement.sendKeys('5');
        element(by.cssContainingText('option','-')).click();
        button.click();
        element(by.cssContainingText('.ng-binding','5'));
        console.log('Subtraction tests passed');
        browser.sleep(2000);        
    });

    it('multiplication test demo',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        firstElement.sendKeys('10');
        secondElement.sendKeys('5');
        element(by.cssContainingText('option','-')).click();
        button.click();
        element(by.cssContainingText('.ng-binding','5'));
        console.log('Subtraction tests passed');
        browser.sleep(2000);        
    });

    it('substraction test demo',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        firstElement.sendKeys('10');
        secondElement.sendKeys('5');
        element(by.cssContainingText('option','-')).click();
        button.click();
        element(by.cssContainingText('.ng-binding','5'));
        console.log('Subtraction tests passed');
        browser.sleep(2000);        
    });

});