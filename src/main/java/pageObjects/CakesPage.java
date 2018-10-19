package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CakesPage extends BasePage {

    public CakesPage(){
        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "Round Cakes")
    static WebElement roundCakes;

    public static String verifyCakesPage(){
        return driver.getCurrentUrl();
    }

    public static void clickOnRoundCakes(){
        roundCakes.click();
    }
}
