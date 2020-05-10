$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "Equifax API Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "accept type is \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.verify_that_response_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify response body values",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "accept type is \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.verify_that_response_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "id is greater than zero",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.id_is_greater_than_zero()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "name is an String type value",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.name_is_an_String_type_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "name is not longer than 10 alpha characters",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.name_is_not_longer_than_alpha_characters(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "last is an String type value",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.last_is_an_String_type_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "last is not longer than 10 alpha characters",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.last_is_not_longer_than_alpha_characters(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "age is between 0 and 120",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.age_is_between_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gender is an String type value",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.gender_is_an_String_type_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gender is \"F\" or \"M\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.gender_is_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "accept type is \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.verify_that_response_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify response response time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "response time is less than 500 milliseconds",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.response_time_is_less_than_milliseconds(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "accept type is \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.verify_that_response_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify data schema",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "validate the data schema is proper",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.validate_the_data_schema_is_proper()"
});
formatter.result({
  "status": "passed"
});
});