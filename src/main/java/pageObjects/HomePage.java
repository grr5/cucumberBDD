package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends BasePage {

    public HomePage(){
        PageFactory.initElements(driver, this);
    }

//    @FindBy(linkText = "LOG IN")
    @FindBy(xpath = "//li/div/div/div/a/span[@class='hidden-xs']")
    public static WebElement loginButton;

    @FindBy(id = "393")
    static WebElement cakesButton;

    @FindBy(id = "396")
    static WebElement weddingCakesLink;



    public static String verifyUrl(){
        String path = driver.getCurrentUrl();
        return path;
    }

    public static LoginPage clickOnLogin(){
        loginButton.click();
        return new LoginPage();
    }

    public static void clickOnCakes(){
        cakesButton.click();
    }

    public static void clickOnWeddingCakes(){
        weddingCakesLink.click();
    }
}
