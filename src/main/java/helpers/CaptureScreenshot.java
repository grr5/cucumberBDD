package helpers;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import pageObjects.BasePage;

import java.io.File;

public class CaptureScreenshot extends BasePage {
    private static WebElement element;

    public static void takeScreenShot() throws Exception{
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("target/main_page.png"));
    }
}
