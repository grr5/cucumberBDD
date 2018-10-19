package helpers;

import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageObjects.BasePage;

public class ActionsHelper extends BasePage {
    private static WebElement element;
    static Actions actions;

    public static void doubleClicking(){
        actions = new Actions(driver);
        actions.doubleClick(element).perform();
    }

    public static void dragAndDropping(WebElement source, WebElement target){
        actions = new Actions(driver);
        actions.dragAndDrop(source, target).perform();
//        assertEquals("Dropped!", target.getText());
    }

    public static void contextMenu(WebElement clickMeElement){
        actions = new Actions(driver);
        actions.contextClick(clickMeElement).sendKeys(Keys.chord(Keys.ALT, "e")).perform();
        WebDriverWait wait = new WebDriverWait(driver, 10);
        Alert alert = wait.until(ExpectedConditions.alertIsPresent());
        alert.dismiss();
    }
}
