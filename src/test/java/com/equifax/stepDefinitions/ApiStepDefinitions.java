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
import java.util.concurrent.TimeUnit;

import static io.restassured.RestAssured.given;


public class ApiStepDefinitions implements EndPoints {

    /*
    - EndPoints Interface is used to store end points for this project.
    - Test class implements this EndPoints interface in order to have all visible properties.
    - Each endpoint is declared as String.
    - Since all interface properties are "public final static" by default,
      none of the class is able to change those end points and they can be called easily since they are static.
    - Global variables are declared for the sake of reducing code redundancy and make the codes easy to maintain.
    - All test scenarios are handled only with a single API call since Response object is declared as global.
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

    // Regex is used in order to test if the name only includes alpha characters and not longer than 10 characters
    @Then("name is an String type value not longer than 10 alpha characters")
    public void name_is_an_String_type_value() {
        name = response.jsonPath().getString("name");
        Assert.assertTrue(name.matches("^[A-Za-z]{1,10}$"));
    }

    // Regex is used in order to test if the last name only includes alpha characters and not longer than 10 characters
    @Then("last is an String type value not longer than 10 alpha characters")
    public void last_is_an_String_type_value() {
        last = response.jsonPath().getString("last");
        Assert.assertTrue(last.matches("^[A-Za-z]{1,10}$"));
    }

    @Then("age is between {int} and {int}")
    public void age_is_between_and(Integer int1, Integer int2) {
        age = response.jsonPath().getInt("age");
        Assert.assertTrue(0<age && age<120);
    }

    @Then("gender is an String type value and gender is F or M")
    public void gender_is_an_String_type_value() {
        gender = response.jsonPath().getString("gender");
        Assert.assertTrue(gender.matches("^[FM]{1}$"));
    }

    @Then("response time is less than {int} milliseconds")
    public void response_time_is_less_than_milliseconds(Integer time) {
        Assert.assertTrue(response.timeIn(TimeUnit.MILLISECONDS) < time);
    }

    /*
    Instead of using any external library, different approach is followed.
    A POJO class is created with required data types in accordance with acceptance criteria.
    Then Response and JsonPath are used and try to assign this object to Customer (POJO) object.
    If the response has a valid/proper data schema/structure, it will return true.
    If it fails to assign response to Customer POJO, in this case it returns false.
    See also ApiUtils Class.
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
