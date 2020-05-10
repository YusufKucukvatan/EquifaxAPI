package com.equifax.stepDefinitions;

import com.equifax.utilities.ApiUtils;
import com.equifax.utilities.EndPoints;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class ApiStepDefinitions implements EndPoints {

    private Response response;
    private JsonPath json;
    private ContentType contentType;

    @Given("accept type is {string}")
    public void accept_type_is(String string) {
        if(string.toLowerCase().contains("json")){
            contentType = ContentType.JSON;
        }else if(string.toLowerCase().contains("xml")){
            contentType = ContentType.XML;
        }
    }

    @When("user sends GET request")
    public void user_sends_GET_request() {
        response =
                given()
                .accept(contentType)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}");
    }

    @Then("verify that response status code is {int}")
    public void verify_that_response_status_code_is(Integer statusCode) {
        response.then().statusCode(statusCode);
    }

    @Then("id is greater than zero")
    public void id_is_greater_than_zero() {
        given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .then()
                .assertThat()
                .body("id",greaterThan(0))
        ;
    }

    @Then("name is an String type value")
    public void name_is_an_String_type_value() {
        given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .prettyPeek()
                .then()
                .assertThat()
                .body("name", allOf(matchesPattern("(.*[A-Za-z]*.)")))
        ;
    }

    @Then("name is not longer than {int} alpha characters")
    public void name_is_not_longer_than_alpha_characters(Integer int1) {
                given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .then()
                .assertThat()
                .body("name.size()", lessThan(10))
        ;
    }

    @Then("last is an String type value")
    public void last_is_an_String_type_value() {
                given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .then()
                .assertThat()
                .body("last", allOf(matchesPattern("(.*[A-Za-z]*.)")))
                ;
    }

    @Then("last is not longer than {int} alpha characters")
    public void last_is_not_longer_than_alpha_characters(Integer int1) {
        given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .then()
                .assertThat()
                .body("last.size()", lessThan(10))
        ;
    }

    @Then("age is between {int} and {int}")
    public void age_is_between_and(Integer int1, Integer int2) {
                given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .then()
                .assertThat()
                .body("age", is(greaterThan(0)))
                .body("age", is(lessThan(120)))
        ;
    }

    @Then("gender is an String type value")
    public void gender_is_an_String_type_value() {
                given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .then()
                .assertThat()
                .body("gender", allOf(matchesPattern("(.*[A-Za-z]*.)")))
                .body("age", is(greaterThan(0)))
                .body("age", is(lessThan(120)))
                .body("gender", is(oneOf("F","M")))
        ;
    }

    @Then("gender is {string} or {string}")
    public void gender_is_or(String string1, String string2) {
                given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .then()
                .assertThat()
                .body("gender", is(oneOf(string1, string2)))
        ;
    }

    @Then("response time is less than {int} milliseconds")
    public void response_time_is_less_than_milliseconds(Integer int1) {

        given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .prettyPeek()
                .then()
                .assertThat()
                .time(lessThan(500L))
        ;

    }


    @Then("validate the data schema is proper")
    public void validate_the_data_schema_is_proper() {
        json = given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}").jsonPath();

        boolean isValid = ApiUtils.isValidJson(json);
        Assert.assertTrue(isValid);
    }


}
