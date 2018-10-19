package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Cart extends BasePage {

    public Cart(){
        PageFactory.initElements(driver, this);
    }

    @FindBy(linkText = "PLACE ORDER")
    static WebElement placeOrder;

    @FindBy(xpath = "//*[@id=\"wrapper\"]/div[3]/section/div/div/div/div[2]/div/div/div[1]/table/tbody/tr[1]/td[1]/div/div[2]/a")
    static WebElement product;

    public static void placingOrder(){
        placeOrder.click();
    }

    public static String confirmAddedProduct(){
        return product.getText();
    }
}
