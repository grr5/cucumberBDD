package helpers;

import org.openqa.selenium.WebElement;
import pageObjects.BasePage;

public class CheckBoxHelper extends BasePage {
    private static WebElement element;

    public static void selectCheckBox(){
        if (!element.isSelected()){
            element.click();
        }
    }

    public static void deSelectCheckBox(){
        if (element.isSelected()){
            element.click();
        }
    }
}
