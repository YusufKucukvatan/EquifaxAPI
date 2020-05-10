package tests;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import utilities.ApiUtils;
import utilities.ConfigurationReader;
import utilities.EndPoints;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

/*
I use Rest Assured library and Hamcrest Matchers
I imported RestAssured and hamcrest.Matchers static properties in order to use them directly in my tests.
 */

public class Test1 implements EndPoints{

    // I assigned baseURI which is a static member of RestAssured library.
    // It will be called before each single API call.
    // I used properties file instead of hard coding
    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = ConfigurationReader.get("baseURI");
    }


    /*
    - I use EndPoints Interface to store end points for this project.
    - Each endpoint is declared as String.
    - Since all interface properties are "public final static" by default,
    none of the class is able to change those end points and I can call easily since these are static.
     */
    @Test
    @DisplayName("Verify status code")
    public void testStatusCode(){

        given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .prettyPeek()
                .then()
                .assertThat()
                .statusCode(200);

    }


    /*
    - I used different hamcrest verification methods in this test.
    - gretaerThan / lessThan / oneOf methods are very useful methods.
    - "name.size()" returns the length of a string. So I don't need to extract value and use name.length() method.
    - oneOf method is also very handy. I don't have to use "and/or" logic for this kind of requirements.
     */
    @Test
    @DisplayName("Verify response body values")
    public void testBody(){

        given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}")
                .prettyPeek()
                .then()
                .assertThat()
                .body("id",greaterThan(0))
                .body("name.size()", lessThan(10))
                .body("name", matchesPattern("[A-z]"))
                .body("last.size()", lessThan(10))
                .body("last", matchesPattern("[A-z]"))
                .body("age", is(greaterThan(0)))
                .body("age", is(lessThan(120)))
                .body("gender", is(oneOf("F","M")))
                ;
    }

    @Test
    @DisplayName("Verify response time")
    public void testResponseTime(){

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


    /*
    - Requirement is not using any library such as Gson or Jackson.
    - First I use JsonPath class which enables extracting data without using external libraries.
    - Then I create an "isValidJson" method in ApiUtils class.
    - This method accepts a JsonPath object and then it parse it to the Customer POJO.
    - I use try and catch block in order to see the result of parsing.
    - If the response body schema thoroughly matches with my POJO it will return true.
    - If it does not match, catch block will be initialized and returns false.
     */
    @Test
    @DisplayName("Template POJO validation")
    public void testPOJO(){

        JsonPath json = given()
                .accept(ContentType.JSON)
                .pathParam("id", customerEndpoint)
                .when()
                .get("customer/{id}").jsonPath();

        boolean isValid = ApiUtils.isValidJson(json);
        Assert.assertTrue(isValid);
    }

}
