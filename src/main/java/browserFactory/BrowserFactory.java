package browserFactory;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import pageObjects.BasePage;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BrowserFactory extends BasePage {

    public static Properties prop =new Properties();

    public BrowserFactory(){
        try {
//            prop = new Properties();
            FileInputStream ip = new FileInputStream(System.getProperty("user.dir") + "/src/main/resources/config.properties");
            prop.load(ip);
        } catch(FileNotFoundException e) {
            e.printStackTrace();
        } catch(IOException e) {
            e.printStackTrace();
        }

    }



    public static void browserSetup(){

        String browserName = prop.getProperty("browser");
        if (browserName.equalsIgnoreCase("chrome")){
            WebDriverManager.chromedriver().setup();
//            System.setProperty("webdriver.chrome.driver", "src\\main\\java\\drivers\\chromedriver.exe");
            driver = new ChromeDriver();
        }
        else if (browserName.equalsIgnoreCase("firefox")){
//            System.setProperty("webdriver.gecko.driver", "src\\main\\java\\drivers\\geckodriver.exe");
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
        }
        else if (browserName.equalsIgnoreCase("edge")){
            WebDriverManager.edgedriver().setup();
            driver = new EdgeDriver();
        }
        else {
         System.out.println("no browser is select");
        }

        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

        driver.get(prop.getProperty("URL"));
    }
}
