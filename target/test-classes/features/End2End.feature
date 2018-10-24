@all
Feature: Cakes and Bakes

  @cake
  Scenario: Adding a cake to shopping cart

    Given user is on cakes and bakes homepage
    When user clicks on cakes button
    And user clicks on round cakes button
    And the user clicks on rw51 cake
    And the user selects sponge type
    Then the user chose cake size
    And the user enters message to write on the cake
    Then the user should add it to the cart
    Then user can see the item in the cart
    Then user can proceed to checkout
    And user can select date, time
    And user clicks on next button
    And user enters his "username", "password"
    And user clicks on submit button
    Then user should go to payment page

    @login
    Scenario: Login

      Given user is on cakes and bakes homepage
      When user clicks on login button
      And user enters user name
      And user enters passaword
      And user clicks on sign_in button
      Then the user should able to login

      @login_fail
      Scenario Outline:
        Given user is on cakes and bakes homepage
        When user clicks on login button
        And user enters email_address "<userName>"
        And user enter password "<passwd>"
        And user clicks on sign_in button
        Then the user should able to login

        Examples:
        |userName         | passwd|
        |qatest@gmail.com | qatest@25|
        |Ravi             | pass |

        @register
        Scenario Outline:
          Given user is on cakes and bakes homepage
          When user clicks on login button
          And user clicks on join_with_us link
          And user enters details as "<firstName>", "<lastName>", "<eMail>", "<password>", "<confirmPassword>", "<phoneNumber>"
          And user clicks on register button
          Then user should be able to register

          Examples:
          |firstName  |lastName     |eMail          |password |confirmPassword  |phoneNumber|
          |test       |testLastname |test@gmail.com |test     |test             |5675675564|

