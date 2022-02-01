package app;


public class Stock {

    public String nameStock;
    public String WKNStock;
    public String artWertpapierPortfolio;
    public int stueckzahlPortfolio;


    public Stock(String name,String WKN,String artWertpapier,int stueckzahl){
        nameStock = name;
        WKNStock = WKN;
        artWertpapierPortfolio = artWertpapier;
        stueckzahlPortfolio = stueckzahl;
    }



    //Getter and Setter

    public String getNamePortfolio() {
        return nameStock;
    }

    public void setNamePortfolio(String namePortfolio) {
        this.nameStock = namePortfolio;
    }

    public String getWKNPortfolio() {
        return WKNStock;
    }

    public void setWKNPortfolio(String WKNPortfolio) {
        this.WKNStock = WKNPortfolio;
    }

    public String getArtWertpapierPortfolio() {
        return artWertpapierPortfolio;
    }

    public void setArtWertpapierPortfolio(String artWertpapierPortfolio) {
        this.artWertpapierPortfolio = artWertpapierPortfolio;
    }

    public int getStueckzahlPortfolio() {
        return stueckzahlPortfolio;
    }

    public void setStueckzahlPortfolio(int stueckzahlPortfolio) {
        this.stueckzahlPortfolio = stueckzahlPortfolio;
    }

    @Override
    public String toString(){
        return "name: " + this.nameStock + " WKN: "+ this.WKNStock + " art: " + this.artWertpapierPortfolio + " zahl: " + this.stueckzahlPortfolio ;
    }
}
