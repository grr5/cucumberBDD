$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End.feature");
formatter.feature({
  "line": 2,
  "name": "Cakes and Bakes",
  "description": "",
  "id": "cakes-and-bakes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 36085105185,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Adding a cake to shopping cart",
  "description": "",
  "id": "cakes-and-bakes;adding-a-cake-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@cake"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on cakes and bakes homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on cakes button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on round cakes button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user clicks on rw51 cake",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user selects sponge type",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user chose cake size",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the user enters message to write on the cake",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user should add it to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user can see the item in the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user can proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user can select date, time",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on next button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters his \"username\", \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should go to payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_cakes_and_bakes_homepage()"
});
formatter.result({
  "duration": 899434127,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_cakes_button()"
});
formatter.result({
  "duration": 5558589565,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_round_cakes_button()"
});
formatter.result({
  "duration": 7378822435,
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
  "duration": 3881687074,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_selects_sponge_type()"
});
formatter.result({
  "duration": 171704840,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_chose_cake_size()"
});
formatter.result({
  "duration": 136269330,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_enters_message_to_write_on_the_cake()"
});
formatter.result({
  "duration": 224882283,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_should_add_it_to_the_cart()"
});
formatter.result({
  "duration": 4936130294,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_can_see_the_item_in_the_cart()"
});
formatter.result({
  "duration": 71240798,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_can_proceed_to_checkout()"
});
formatter.result({
  "duration": 2556640553,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_can_select_date_time()"
});
formatter.result({
  "duration": 3395476652,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_next_button()"
});
formatter.result({
  "duration": 5229288326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 17
    },
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "MyStepDefs.user_enters_his(String,String)"
});
formatter.result({
  "duration": 242345460,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 5119124730,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_go_to_payment_page()"
});
formatter.result({
  "duration": 44806245,
  "status": "passed"
});
formatter.after({
  "duration": 336713290,
  "status": "passed"
});
formatter.before({
  "duration": 31578918236,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login",
  "description": "",
  "id": "cakes-and-bakes;login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user is on cakes and bakes homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters user name",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user enters passaword",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on sign_in button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user should able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_cakes_and_bakes_homepage()"
});
formatter.result({
  "duration": 756715873,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 117502260,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enters_user_name()"
});
formatter.result({
  "duration": 2128131946,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enters_passaword()"
});
formatter.result({
  "duration": 93737502,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClicksOnSign_inButton()"
});
formatter.result({
  "duration": 113192928,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_should_able_to_login()"
});
formatter.result({
  "duration": 20063172818,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027My Account\u0027)]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-NBRT2PUV\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Ravi\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54171}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 9586895312f19aed8b0848b7c66765a2\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027My Account\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat pageObjects.LoginPage.verifyLogin(LoginPage.java:50)\r\n\tat stepDefinitions.MyStepDefs.the_user_should_able_to_login(MyStepDefs.java:157)\r\n\tat ✽.Then the user should able to login(End2End.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 574080975,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "",
  "description": "",
  "id": "cakes-and-bakes;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@login_fail"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user is on cakes and bakes homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters email_address \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter password \"\u003cpasswd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user clicks on sign_in button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user should able to login",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "cakes-and-bakes;;",
  "rows": [
    {
      "cells": [
        "userName",
        "passwd"
      ],
      "line": 43,
      "id": "cakes-and-bakes;;;1"
    },
    {
      "cells": [
        "qatest@gmail.com",
        "qatest@25"
      ],
      "line": 44,
      "id": "cakes-and-bakes;;;2"
    },
    {
      "cells": [
        "Ravi",
        "pass"
      ],
      "line": 45,
      "id": "cakes-and-bakes;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31528622215,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "",
  "description": "",
  "id": "cakes-and-bakes;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 33,
      "name": "@login_fail"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user is on cakes and bakes homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters email_address \"qatest@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter password \"qatest@25\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user clicks on sign_in button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user should able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_cakes_and_bakes_homepage()"
});
formatter.result({
  "duration": 794140788,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 83829168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatest@gmail.com",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.user_enters_email(String)"
});
formatter.result({
  "duration": 1758450985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatest@25",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.he_enter_password(String)"
});
formatter.result({
  "duration": 105588023,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClicksOnSign_inButton()"
});
formatter.result({
  "duration": 5031350889,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_should_able_to_login()"
});
formatter.result({
  "duration": 1753454435,
  "status": "passed"
});
formatter.after({
  "duration": 768555017,
  "status": "passed"
});
formatter.before({
  "duration": 31072513971,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "",
  "description": "",
  "id": "cakes-and-bakes;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 33,
      "name": "@login_fail"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user is on cakes and bakes homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters email_address \"Ravi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter password \"pass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user clicks on sign_in button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user should able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_cakes_and_bakes_homepage()"
});
formatter.result({
  "duration": 767303462,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 81386359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ravi",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.user_enters_email(String)"
});
formatter.result({
  "duration": 1659792594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.he_enter_password(String)"
});
formatter.result({
  "duration": 84952153,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClicksOnSign_inButton()"
});
formatter.result({
  "duration": 501531733,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.the_user_should_able_to_login()"
});
formatter.result({
  "duration": 20023016100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027My Account\u0027)]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-NBRT2PUV\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Ravi\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54241}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 0c10b5748b12c74a41080bac1686e1ef\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027My Account\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat pageObjects.LoginPage.verifyLogin(LoginPage.java:50)\r\n\tat stepDefinitions.MyStepDefs.the_user_should_able_to_login(MyStepDefs.java:157)\r\n\tat ✽.Then the user should able to login(End2End.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 677226759,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "",
  "description": "",
  "id": "cakes-and-bakes;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user is on cakes and bakes homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user clicks on join_with_us link",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user enters details as \"\u003cfirstName\u003e\", \"\u003clastName\u003e\", \"\u003ceMail\u003e\", \"\u003cpassword\u003e\", \"\u003cconfirmPassword\u003e\", \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user clicks on register button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user should be able to register",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "cakes-and-bakes;;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "eMail",
        "password",
        "confirmPassword",
        "phoneNumber"
      ],
      "line": 57,
      "id": "cakes-and-bakes;;;1"
    },
    {
      "cells": [
        "test",
        "testLastname",
        "test@gmail.com",
        "test",
        "test",
        "5675675564"
      ],
      "line": 58,
      "id": "cakes-and-bakes;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32538409945,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "",
  "description": "",
  "id": "cakes-and-bakes;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@register"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user is on cakes and bakes homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user clicks on join_with_us link",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user enters details as \"test\", \"testLastname\", \"test@gmail.com\", \"test\", \"test\", \"5675675564\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user clicks on register button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user should be able to register",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_cakes_and_bakes_homepage()"
});
formatter.result({
  "duration": 777256738,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 105034494,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_join_with_us_link()"
});
formatter.result({
  "duration": 5699882752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 24
    },
    {
      "val": "testLastname",
      "offset": 32
    },
    {
      "val": "test@gmail.com",
      "offset": 48
    },
    {
      "val": "test",
      "offset": 66
    },
    {
      "val": "test",
      "offset": 74
    },
    {
      "val": "5675675564",
      "offset": 82
    }
  ],
  "location": "MyStepDefs.user_enters_details_as(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 692727270,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_register_button()"
});
formatter.result({
  "duration": 123390258,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_be_able_to_register()"
});
formatter.result({
  "duration": 20011922201,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-NBRT2PUV\u0027, ip: \u0027192.168.0.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Ravi\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54277}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 6b04d3399dd4440d130e0c176da5511b\n*** Element info: {Using\u003did, value\u003d}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat pageObjects.RegisterPage.verifyUserRegistration(RegisterPage.java:53)\r\n\tat stepDefinitions.MyStepDefs.user_should_be_able_to_register(MyStepDefs.java:190)\r\n\tat ✽.Then user should be able to register(End2End.feature:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 286141359,
  "status": "passed"
});
});