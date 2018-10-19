package stepDefinitions;

import browserFactory.BrowserFactory;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.ActionsHelper;
import helpers.DropDownHelper;
import org.junit.Assert;
import org.openqa.selenium.By;
import pageObjects.*;
import utils.Helpers;

import java.util.List;

public class MyStepDefs extends BasePage {
    BrowserFactory browserFactory = new BrowserFactory();
    HomePage homePage;
    CakesPage cakesPage;
    RoundCakes roundCakes;
    Cart cart;
    RegisterPage registerPage;
    CheckOutPage checkOutPage;

    public MyStepDefs(){
        super();
    }

    @Before
    public void openBrowser(){
        browserFactory.browserSetup();
    }

    @Given("^user is on cakes and bakes homepage$")
    public void user_is_on_cakes_and_bakes_homepage() throws Throwable {
        Assert.assertEquals(HomePage.verifyUrl(), "https://www.cakesbakes.co.uk/");
    }

    @When("^user clicks on cakes button$")
    public void user_clicks_on_cakes_button() throws Throwable {

        homePage = new HomePage();
//        ActionsHelper.contextMenu(HomePage.loginButton);
        HomePage.clickOnCakes();
        Assert.assertEquals(CakesPage.verifyCakesPage(), "https://www.cakesbakes.co.uk/category");
    }

    @When("^user clicks on round cakes button$")
    public void user_clicks_on_round_cakes_button() throws Throwable {
        cakesPage = new CakesPage();
        CakesPage.clickOnRoundCakes();
        Assert.assertEquals(RoundCakes.verifyRoundCakesPage(), "https://www.cakesbakes.co.uk/round-cakes-online");
    }

    @When("^the user clicks on rw(\\d+) cake$")
    public void the_user_clicks_on_rw_cake(int arg1) throws Throwable {
        roundCakes = new RoundCakes();
        RoundCakes.selectCake();
    }


    @When("^the user selects sponge type$")
    public void the_user_selects_sponge_type() throws Throwable {
        RoundCakes.cakeSpongeType("Vanilla");
    }

    @Then("^the user chose cake size$")
    public void the_user_chose_cake_size() throws Throwable {
        RoundCakes.cakeSize("12x12 (approx 10 to 15 Servings)");
    }

    @Then("^the user enters message to write on the cake$")
    public void the_user_enters_message_to_write_on_the_cake() throws Throwable {
        RoundCakes.cakeMessage("Happy Birthday Testing");
    }

    @Then("^the user should add it to the cart$")
    public void the_user_should_add_it_to_the_cart() throws Throwable {
        RoundCakes.addToCart();
    }

    @Then("^user can see the item in the cart$")
    public void user_can_see_the_item_in_the_cart() throws Throwable {
        cart = new Cart();
        Cart.placingOrder();
        Assert.assertEquals(Cart.confirmAddedProduct(), "RW-51");

    }

    @Then("^user can proceed to chckout$")
    public void user_can_proceed_to_chckout() throws Throwable {
        checkOutPage = new CheckOutPage(driver);

        CheckOutPage.selectDate("qatest@gmail.com", "qatest@25");
    }

    // *** Login Step definitions *** //
//update update //
    @When("^user clicks on login button$")
    public void user_clicks_on_login_button() throws Throwable {
        homePage = new HomePage();
        HomePage.clickOnLogin();
    }

    @When("^user enters user name$")
    public void user_enters_user_name() throws Throwable {
        LoginPage.enterEmail("qatest@gmail.com");
    }

    @When("^user enters passaword$")
    public void user_enters_passaword() throws Throwable {
        LoginPage.enterPassword("qatest@25");
    }

    @And("^user clicks on sign_in button$")
    public void userClicksOnSign_inButton() throws Throwable {
        LoginPage.clickOnSignIn();
    }

    @Then("^the user should able to login$")
    public void the_user_should_able_to_login() throws Throwable {
        Assert.assertEquals(LoginPage.verifyLogin(), "MY ACCOUNT");
    }

    @When("^user enters email_address \"([^\"]*)\"$")
    public void user_enters_email(String arg1) throws Throwable {
        LoginPage.enterEmail(arg1);
    }

    @When("^user enter password \"([^\"]*)\"$")
    public void he_enter_password(String arg1) throws Throwable {
        LoginPage.enterPassword(arg1);
    }

    // *** User register step definitions *** //

    @When("^user clicks on join_with_us link$")
    public void user_clicks_on_join_with_us_link() throws Throwable {
        LoginPage.joinWithUs();
    }

    @When("^user enters details as \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void user_enters_details_as(String firstName, String lastName, String eMail, String password, String confirmPassword, String phoneNumber) throws Throwable {
        registerPage = new RegisterPage(driver);
        RegisterPage.enterUserDetails(firstName, lastName, eMail, password, confirmPassword, phoneNumber);
    }

    @When("^user clicks on register button$")
    public void user_clicks_on_register_button() throws Throwable {
        RegisterPage.clickOnRegister();
    }

    @Then("^user should be able to register$")
    public void user_should_be_able_to_register() throws Throwable {
        Assert.assertEquals(RegisterPage.verifyUserRegistration(), "Your registration has been successful");
    }

}
