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

    @FindBy(linkText = "RW-51")
    static WebElement product;

    public static void placingOrder(){
        placeOrder.click();
    }

    public static String confirmAddedProduct(){
       return product.getText();
    }
}
