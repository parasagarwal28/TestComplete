Feature: Description of the new feature1

Background

  Scenario: Verifying Logout functionality
    Given user opens the chromebrowser
    When user enter username as "test3"
    And user enter password as "test3"
    And user clicks on the submit button
    And user clicks on the logout button
    Then user closes the browser
    
  Scenario: Verifying Logout functionality1
    Given user opens the chromebrowser
    When user enter username as "test3"
    And user enter password as "test3"
    And user clicks on the "submit" button
    And user clicks on the "logout" button
    Then user closes the browser
    