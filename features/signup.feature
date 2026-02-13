@signup
Feature: User sign up
  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When User click on cookies
    And user click on sign up button
    And user enters full name as"Adenuga yemi"
    And User enters email
    And User enters as "Hardayemmh4$"
    And User click on create account button
    Then I should see the dashboard