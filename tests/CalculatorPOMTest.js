let homepage = require('../pages/HomePage');
describe('calculator pom demo',function(){
    homepage.openURL('http://juliemr.github.io/protractor-demo/');
    it('addition test',function(){        
        homepage.enterFirstNumber('20');
        homepage.enterSecondNumber('10');
        homepage.selectOperator('add');
        homepage.clickGoBtn();
        homepage.verifyResults('30');
        console.log('Addition completed successfully');
        browser.sleep(2000);
    });

    it('division test', function(){
        homepage.enterFirstNumber('10');
        homepage.enterSecondNumber('5');
        homepage.selectOperator('divide');
        homepage.clickGoBtn();
        homepage.verifyResults('20');
        console.log('Division completed successfully');
        browser.sleep(2000);        
    });
    it('multiplication test', function(){
        homepage.enterFirstNumber('10');
        homepage.enterSecondNumber('5');
        homepage.selectOperator('divide');
        homepage.clickGoBtn();
        homepage.verifyResults('50');
        console.log('Multiplcation completed successfully');
        browser.sleep(2000);        
    });
    it('substraction test', function(){
        homepage.enterFirstNumber('10');
        homepage.enterSecondNumber('5');
        homepage.selectOperator('divide');
        homepage.clickGoBtn();
        homepage.verifyResults('5');
        console.log('Substraction completed successfully');
        browser.sleep(2000);        
    });

});