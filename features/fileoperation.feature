@file
Feature: File Operation
  Background: Successful login with valid credentials
    Given I navigate to the login page
    When I click on sigin button
    When I enter valid credentials
    Then I should see the dashboard

    Scenario: File Operation on dashbord 
    When I click "File Operations" Start Practice
    And I click "Download Template Excel" button 
    And I browse for a file
    # And user click on  download button
    And I click "Download" button 
    Then I able to upload a file successfully 

    Scenario: File Operation on slide menus 
   When I click "File Operations" on slide menus
    And I click "Download Template Excel" button 
    And I browse for a file
    # And user click on  download button
    And I click "Download" button 
    Then I able to upload a file successfully 