package com.equifax.pojos;

public class CustomerValidation {

    Customer customer;
    private String id;
    private String name;
    private String last;
    private String gender;
    private String age;

    public CustomerValidation(String id,String name, String last, String gender, String age) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.last = last;
        this.gender = gender;
    }
    public CustomerValidation(){

    }

    public CustomerValidation(Customer customer){
        this.customer = customer;
        getLastType();
        getIdType();
        getAgeType();
        getNameType();
        getGenderType();
    }
    public String getAgeType() {

        age= ((Object)(customer.getAge())).getClass().getTypeName();
        return age;
    }

    public String getNameType() {
        name=((Object)(customer.getName())).getClass().getTypeName();
        this.name=name;
        return name;
    }

    public String getLastType() {
        last=((Object)(customer.getLast())).getClass().getTypeName();
        this.last=last;
        return last;
    }

    public String getGenderType() {
        gender=((Object)(customer.getGender())).getClass().getTypeName();
        this.gender=gender;
        return gender;
    }

    public String getIdType() {
        id=((Object)(customer.getId())).getClass().getTypeName();
        this.id=id;
        return id;
    }


    @Override
    public String toString() {
        return  "{" +
                "id=" + id + " " +
                "name='" + name +'\'' +
                "last='" + last +'\'' +
                "age="+age  + " " +
                "gender='" + gender + '\''+
                "}";
    }

}
