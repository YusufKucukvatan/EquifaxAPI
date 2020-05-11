package com.equifax.stepDefinitions;

import com.equifax.utilities.ConfigurationReader;
import io.cucumber.java.Before;
import io.restassured.RestAssured;

public class Hooks {

    // I assigned baseURI which is a static member of RestAssured library.
    // It will be called before each single API call.
    // I used properties file instead of hard coding
    @Before
    public void setupAPI() {
        RestAssured.baseURI = ConfigurationReader.get("baseURI");
    }
}
