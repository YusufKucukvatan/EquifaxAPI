
  # I used background which iterates just before each scenario.
  # I also try to parameterize from feature file as much as possible instead of hard coding.

@api
Feature: Equifax API Test

  Background:
    Given accept type is "application/json"
    When user sends GET request

  Scenario: Verify that status code is 200
    Then verify that response status code is 200

  Scenario: Verify response body values
    Then id is greater than zero
    And name is an String type value not longer than 10 alpha characters
    And last is an String type value not longer than 10 alpha characters
    And age is between 0 and 120
    And gender is an String type value and gender is F or M
    And response time is less than 500 milliseconds

  Scenario: Verify data schema
    Then validate the data schema is proper