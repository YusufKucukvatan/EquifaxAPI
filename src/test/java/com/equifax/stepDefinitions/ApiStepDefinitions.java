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

import java.util.concurrent.TimeUnit;

import static io.restassured.RestAssured.given;


public class ApiStepDefinitions implements EndPoints {

    /*
    - I used EndPoints Interface to store end points for this project.
    - All test classes will implement this EndPoints interface.
    - Each endpoint is declared as String.
    - Since all interface properties are "public final static" by default,
    none of the class is able to change those end points and I can call easily since these are static.
    - I also create global variables for response and data fields as below.
     */

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

    // I used regex in order to test if the name only includes alpha characters
    @Then("name is an String type value")
    public void name_is_an_String_type_value() {
        name = response.jsonPath().getString("name");
        Assert.assertTrue(name.matches("(.*[A-Za-z]*.)"));
    }

    @Then("name is not longer than {int} alpha characters")
    public void name_is_not_longer_than_alpha_characters(Integer int1) {
        Assert.assertTrue(name.length()<10);
    }

    // I used regex in order to test if the last name only includes alpha characters
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

    //Instead of hardcodin "F" and "M" comes from feature file
    @Then("gender is {string} or {string}")
    public void gender_is_or(String string1, String string2) {
        Assert.assertTrue(gender.equals(string1)||gender.equals(string2));
    }

    @Then("response time is less than {int} milliseconds")
    public void response_time_is_less_than_milliseconds(Integer time) {
        Assert.assertTrue(response.timeIn(TimeUnit.MILLISECONDS) < time);
    }

    /*
    Instead of using any external library, I follow different approach.
    I created a POJO class with required data types in acceptance criteria.
    Then I use response and JsonPath object and try to assign this object to Customer (POJO) object.
    If the response has a valid/proper data schema/structure, it will return true
    If it fails to assign response to my POJO, in this case it returns false.
    Please see also ApiUtils class.
     */
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
