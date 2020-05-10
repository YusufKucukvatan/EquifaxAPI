package com.equifax.stepDefinitions;

import com.equifax.utilities.ConfigurationReader;
import io.cucumber.java.Before;
import io.restassured.RestAssured;

public class Hooks {
    @Before
    public void setupAPI() {
        RestAssured.baseURI = ConfigurationReader.get("baseURI");
    }

}
