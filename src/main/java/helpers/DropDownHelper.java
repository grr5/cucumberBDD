package helpers;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pageObjects.BasePage;

import java.util.List;

public class DropDownHelper extends BasePage {
    private static Select select;

//     With Select class we can select an option in Dropdown using Visible text

    public static void selectByVisible(WebElement element, String text){
        select =new Select(element);
        select.selectByVisibleText(text);
    }

//     or we can select an option in Dropdown using value attribute
    public static void selectByValue(WebElement element, String value){
        select = new Select(element);
        select.selectByValue(value);
    }

    // or we can select an option in Dropdown using index
    public static void selectByIndexNumber(WebElement element, Integer value){
        select = new Select(element);
        select.selectByIndex(value);
    }

    // Verify number of options Dropdown has for selection
    public static Integer dropDownCount(WebElement element){
        select = new Select(element);
        return select.getOptions().size();
    }

}
