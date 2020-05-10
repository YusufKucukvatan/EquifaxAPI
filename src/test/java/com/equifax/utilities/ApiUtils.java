package com.equifax.utilities;

import groovy.json.JsonException;
import io.restassured.path.json.JsonPath;
import com.equifax.pojos.Customer;

public class ApiUtils {

    /*
    I created a method which checks the response object data schema and returns a boolean.
    I try to assign response object to a Customer(POJO) object.
    If it has all valis data types and structure, it returns true.
    Otherwise it jumps into catch block returns false and throws a "JsonException".
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