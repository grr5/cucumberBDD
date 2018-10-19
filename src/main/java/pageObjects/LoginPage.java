package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage{

    public LoginPage(){
        this.driver = driver;

        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "Join with us")
    static WebElement registerButton;

    @FindBy(xpath = "//input[@placeholder='Email Address']")
    static WebElement emailAddress;

    @FindBy(xpath = "//input[@placeholder='Password']")
    static WebElement password;

    @FindBy(xpath = "//button[@value='SIGN IN']")
    static WebElement signButton;

    @FindBy(xpath = "//span[contains(text(),'My Account')]")
    static WebElement myAccount;


    public static void joinWithUs(){
        registerButton.click();

    }

    public static void enterEmail(String email){
        emailAddress.sendKeys(email);
    }

    public static void enterPassword(String pwd){
        password.sendKeys(pwd);
    }

    public static void clickOnSignIn(){
        signButton.click();
    }

    public static String verifyLogin(){
        return myAccount.getText();
    }
}
