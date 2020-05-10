package com.equifax.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


/*
- I used Cucumber in order to run test scenarios with the help of JUnit.
- I also added Cucumber reports which you can see the reports through the link below
- http://localhost:63342/EquifaxAPI/target/cucumber-html-reports/overview-features.html?_ijt=o0sh8rh5doijdksfkargbkhgqh
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = "com/equifax/stepDefinitions",
        plugin = {
                "json:target/cucumber.json",
                "html:target/cucumber-reports",
                "pretty"
        },
        monochrome = true,
        strict = true,
        dryRun = false

)

public class CucumberRunner {
}