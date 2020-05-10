package com.equifax.utilities;

import groovy.json.JsonException;
import io.restassured.path.json.JsonPath;
import com.equifax.pojos.Customer;

public class ApiUtils {

    /*
    We can insert some utilities which is customized for DeckApi.
    This requirement is not complex to create that kind of utility class.
    This is created in order to reflect the generic approach.
    */

    public static boolean isValidJson (JsonPath json){
            try {
                Customer customer = json.getObject("", Customer.class);
                return true;
            } catch(JsonException e) {
                return false;
            }
    }

}