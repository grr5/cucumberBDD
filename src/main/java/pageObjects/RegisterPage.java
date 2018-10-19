package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends BasePage {

    public RegisterPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@placeholder='First Name']")
    static WebElement fName;

    @FindBy(xpath = "//input[@placeholder='Last Name']")
    static WebElement lName;

    @FindBy(xpath = "//input[@placeholder='E-Mail']")
    static WebElement email;

    @FindBy(xpath = "//input[@placeholder='Password']")
    static WebElement password;

    @FindBy(xpath = "//input[@placeholder='Re-Type Password']")
    static WebElement confirmPassword;

    @FindBy(xpath = "//input[@placeholder='Phone Number']")
    static WebElement phoneNumber;

    @FindBy(xpath = "//button[@value='Register']")
    static WebElement registerButton;

    @FindBy(xpath = "")
    static WebElement welcomeMsg;

    public static void enterUserDetails(String firstName, String lastName, String emailadd, String pwd, String confirmPWD, String phoneNo){
        fName.sendKeys(firstName);
        lName.sendKeys(lastName);
        email.sendKeys(emailadd);
        password.sendKeys(pwd);
        confirmPassword.sendKeys(confirmPWD);
        phoneNumber.sendKeys(phoneNo);
    }

    public static void clickOnRegister(){
        registerButton.click();
    }

    public static String verifyUserRegistration(){
        return welcomeMsg.getText();
    }
}


