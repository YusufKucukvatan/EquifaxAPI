package com.equifax.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


/*
- Cucumber is used in order to run test scenarios with the help of JUnit.
- Cucumber reports are also added to generate HTML reports
- FailedRunner class is created for failed scenarios
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = "com/equifax/stepDefinitions",
        plugin = {
                "json:target/cucumber.json",
                "html:target/cucumber-reports",
                "rerun:target/rerun.txt",
                "pretty"
        },
        monochrome = true,
        strict = true,
        dryRun = false

)

public class CucumberRunner {
}