package com.equifax.utilities;

public interface EndPoints {
    String customerEndpoint = "a";

    /*
    We can store all the endpoints in this interface.
    There are a bunch of reason why I choose to keep endpoints in an interface.
        1. Interface is light weight comparing a class. Because it is a blueprint of a class.
        2. I don't need to instantiate any thing from this end point container. I only need to store them in somewhere.
        Interfaces cannot be instantiated. That is the reason why I use interface for that purpose.
        3. Multiple inheritance is possible by using interfaces.
        In case I need to implement any other interface or to extend any class, it is possible.
        4. EndPoints will be final static by default. easy to create and call them.
     */

}
