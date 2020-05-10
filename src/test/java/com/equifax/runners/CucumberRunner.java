package com.equifax.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "json:target/cucumber.json",
                "html:target/cucumber-reports",
                "pretty"
        },
        monochrome = true,
        strict = true,
        features = "src/test/resources/features",
        glue = "com/equifax/stepDefinitions"
)

public class CucumberRunner {
}