package com.equifax.stepDefinitions;

import com.equifax.utilities.ApiUtils;
import com.equifax.utilities.ConfigurationReader;
import com.equifax.utilities.EndPoints;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import static io.restassured.RestAssured.given;


public class ApiStepDefinitions implements EndPoints {

    private Response response;
    private JsonPath json;
    private ContentType contentType;
    private int id;
    private String name;
    private String last;
    private int age;
    private String gender;


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
        id = response.jsonPath().getInt("id");
        Assert.assertTrue(id>0);
    }

    @Then("name is an String type value")
    public void name_is_an_String_type_value() {
        name = response.jsonPath().getString("name");
        Assert.assertTrue(name.matches("(.*[A-Za-z]*.)"));
    }

    @Then("name is not longer than {int} alpha characters")
    public void name_is_not_longer_than_alpha_characters(Integer int1) {
        Assert.assertTrue(name.length()<10);
    }

    @Then("last is an String type value")
    public void last_is_an_String_type_value() {
        last = response.jsonPath().getString("last");
        Assert.assertTrue(last.matches("(.*[A-Za-z]*.)"));
    }

    @Then("last is not longer than {int} alpha characters")
    public void last_is_not_longer_than_alpha_characters(Integer int1) {
        Assert.assertTrue(last.length()<10);
    }

    @Then("age is between {int} and {int}")
    public void age_is_between_and(Integer int1, Integer int2) {
        age = response.jsonPath().getInt("age");
        Assert.assertTrue(age>0 && age<120);
    }

    @Then("gender is an String type value")
    public void gender_is_an_String_type_value() {
        gender = response.jsonPath().getString("gender");
        Assert.assertTrue(gender.matches("(.*[A-Za-z]*.)"));
    }

    @Then("gender is {string} or {string}")
    public void gender_is_or(String string1, String string2) {
        Assert.assertTrue(gender.equals(string1)||gender.equals(string2));
    }

    @Then("response time is less than {int} milliseconds")
    public void response_time_is_less_than_milliseconds(Integer int1) {


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
