package utils;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import pageObjects.BasePage;

import java.io.File;

public class Utilities extends BasePage {
    public static void captureScreenShot(){
        try {
            TakesScreenshot ts = (TakesScreenshot) driver;
            File source = ts.getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(source, new File("./screenShots/" + '_' + ".png"));
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
