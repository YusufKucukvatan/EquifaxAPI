package pojos;

import com.google.gson.annotations.SerializedName;

public class Customer {

    // if you don't use exactly same name as json, you have to specify by using @SerializedName("id") annotation
    // So, we tell Rest-Assured that I typed 'customer_id' but you will search for 'id' in the json
    @SerializedName("id")
    private int customer_id;
    private String name; //==> in this cae we don't have to use @SerializedName as we use same name as json
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

    public int getCustomer_id() {
        return customer_id;
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
                "customer_id=" + customer_id +
                ", name='" + name + '\'' +
                ", last='" + last + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                '}';
    }
}
