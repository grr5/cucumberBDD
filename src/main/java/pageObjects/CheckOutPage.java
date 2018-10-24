package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPage extends BasePage {
    public CheckOutPage(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "franchise_date")
    static WebElement choseDate;

    @FindBy(xpath = "/html/body/div[4]/div[1]/table/tbody/tr[4]/td[5]")
    static WebElement date;

    @FindBy(xpath = "//*[@id=\"franchise_collection_date_time\"]/button")
    static WebElement clickNext;



    public static String verifyCheckoutPage(){
        return driver.getCurrentUrl().toString();
    }

    public static void selectDateTime(){
        choseDate.click();
        date.click();
    }
    public static void clickOnNextLink(){
        clickNext.click();
    }

}
