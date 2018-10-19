package helpers;

import org.openqa.selenium.WebElement;
import pageObjects.BasePage;

public class RadioButtonhelper extends BasePage {
    private static WebElement element;

    public static void radioButtonAction(){
        if (!element.isSelected()){
            element.click();
        }
    }
}
