@draganddrop
Feature: Drag and drop

Background: Successful login with valid credentials
    Given I navigate to the login page
    When I click on sigin button
    When I enter valid credentials
    Then I should see the dashboard

Scenario: Drag and drop on dashboard function
    When I click "Drag & Drop" Start Practice
    And I drag and drop the items
    Then I drop the items successfully

Scenario: Drag and drop on slide menus function
    When I click "Drag and Drop" on slide menus
    And I drag and drop the items
    Then I drop the items successfully

