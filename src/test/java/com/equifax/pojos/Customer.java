package com.equifax.pojos;


public class Customer {

    private int id;
    private String name;
    private String last;
    private int age;
    private String gender;
    private int x;

    public Customer() {
    }

    public Customer(String name, String last, int age, String gender, int x) {
        this.name = name;
        this.last = last;
        this.age = age;
        this.gender = gender;
        this.x = x;
    }

    public int getId() {
        return id;
    }

    //I didn't use setter for id. Because it will be unique and auto-generated.

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String  getGender() {
        return gender;
    }

    public void setGender(String  gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customer_id=" + id +
                ", name='" + name + '\'' +
                ", last='" + last + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                '}';
    }
}
