
@api
Feature: Equifax API Test

  Background:
    Given accept type is "application/json"
    When user sends GET request
    Then verify that response status code is 200


  Scenario: Verify response body values
    Given accept type is "application/json"
    When user sends GET request
    Then verify that response status code is 200
    And id is greater than zero
    And name is an String type value
    And name is not longer than 10 alpha characters
    And last is an String type value
    And last is not longer than 10 alpha characters
    And age is between 0 and 120
    And gender is an String type value
    And gender is "F" or "M"

  Scenario: Verify response response time
    Then response time is less than 500 milliseconds

  Scenario: Verify data schema
    Then validate the data schema is proper