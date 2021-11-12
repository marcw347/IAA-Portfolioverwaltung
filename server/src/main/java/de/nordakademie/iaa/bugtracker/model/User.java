package de.nordakademie.iaa.bugtracker.model;

/**
 * Beinhaltet alle Daten eines angelegten Users
 *
 * @author Dorian Valero, Marlon Hippler
 */

public class User {

    private String name;
    private String surname;
    private String email;
    private String password;
    private int userId;

    public String getName(){return name;}
    public String getSurname(){return surname;}
    public String getEmail(){return email;}
    public String getPassword(){return password;}
    public int getUserId(){return userId;}

    public void setName(String name){ this.name = name;}
    public void setSurname(String surname){ this.surname = surname;}
    public void setEmail(String email){ this.email = email;}
    public void setPassword(String password){ this.password = password;}
    public void setUserId(int userId){ this.userId = userId ;}


}
