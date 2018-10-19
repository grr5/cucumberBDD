$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End.feature");
formatter.feature({
  "line": 1,
  "name": "Cakes and Bakes",
  "description": "",
  "id": "cakes-and-bakes",
  "keyword": "Feature"
});
formatter.before({
  "duration": 44422902208,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Adding a cake to shopping cart",
  "description": "",
  "id": "cakes-and-bakes;adding-a-cake-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on cakes and bakes homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on cakes button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on round cakes button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user clicks on rw51 cake",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user selects sponge type",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user chose cake size",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the user enters message to write on the cake",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user should add it to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user can see the item in the cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user can proceed to chckout",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_cakes_and_bakes_homepage()"
});
formatter.result({
  "duration": 268178129,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_cakes_button()"
});
formatter.result({
  "duration": 4966382089,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_round_cakes_button()"
});
formatter.result({
  "duration": 7417924432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.the_user_clicks_on_rw_cake(int)"
});
formatter.result({
  "duration": 3387833063,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_selects_sponge_type()"
});
formatter.result({
  "duration": 348813554,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_chose_cake_size()"
});
formatter.result({
  "duration": 291008202,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_enters_message_to_write_on_the_cake()"
});
formatter.result({
  "duration": 361809248,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_should_add_it_to_the_cart()"
});
formatter.result({
  "duration": 5121394027,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_can_see_the_item_in_the_cart()"
});
formatter.result({
  "duration": 22570825793,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"wrapper\"]/div[3]/section/div/div/div/div[2]/div/div/div[1]/table/tbody/tr[1]/td[1]/div/div[2]/a\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-NBRT2PUV\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Ravi\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56672}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 8505e2fe91b236d6a6a20f1dcc0ee174\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"wrapper\"]/div[3]/section/div/div/div/div[2]/div/div/div[1]/table/tbody/tr[1]/td[1]/div/div[2]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat pageObjects.Cart.confirmAddedProduct(Cart.java:24)\r\n\tat stepDefinitions.MyStepDefs.user_can_see_the_item_in_the_cart(MyStepDefs.java:90)\r\n\tat ✽.And user can see the item in the cart(End2End.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.user_can_proceed_to_chckout()"
});
formatter.result({
  "status": "skipped"
});
});