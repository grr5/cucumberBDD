package pageObjects;

import helpers.DropDownHelper;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RoundCakes extends BasePage {

    public RoundCakes(){
        PageFactory.initElements(driver, this);
    }

    @FindBy(className = "sdgfsdfsd")
    static WebElement rw51;

    @FindBy(id = "attribute_3")
    static WebElement flavour;

    @FindBy(id = "attribute_1")
    static WebElement cakeSize;

    @FindBy(id = "cakeMessage")
    static WebElement message;

    @FindBy(name = "btnsubmit")
    static WebElement submitButton;

    public static String verifyRoundCakesPage(){
        return driver.getCurrentUrl();
    }

    public static void selectCake(){
        rw51.click();
    }

    public static void cakeSpongeType(String text){
        DropDownHelper.selectByVisible(flavour, text);
    }

    public static void cakeSize(String size){
        DropDownHelper.selectByVisible(cakeSize, size);
    }

    public static void cakeMessage(String msg){
        message.sendKeys(msg);
    }

    public static void addToCart(){
        submitButton.click();
    }
}
