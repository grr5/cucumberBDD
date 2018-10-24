package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOut_2 extends BasePage {

    public CheckOut_2(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    @FindBy(name = "email")
    static WebElement email;

    @FindBy(name = "password")
    static WebElement pwd;

    @FindBy(name = "btnsubmit")
    static WebElement submitButton;

    @FindBy(xpath = "//button[@value=\"Make Payment\"]")
    static WebElement paymentLink;

    public static void enterUserDetails(String ema, String pass){
        email.sendKeys(ema);
        pwd.sendKeys(pass);
    }

    public static void clickOnSubmit(){
        submitButton.click();
    }

    public static String verifyPaymentPage(){
        return paymentLink.getText();
    }
}
