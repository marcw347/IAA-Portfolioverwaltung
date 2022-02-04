package app;
import java.util.ArrayList;
import java.util.List;
import app.Portfolioübersicht;
import app.Stock;

import java.util.ArrayList;

public class Portfolio  {

    public  String namePortfolio;

    public ArrayList<Stock> arrayOfStocks;

    public Portfolio(String name){
        namePortfolio = name;
        this.arrayOfStocks = new ArrayList<>();
    }



    //Findet die Position der Übereinstimmung der WKN in einer ArrayList
    public int findPositionByWKN(String WKN){
        for(int i = 0; i< arrayOfStocks.size(); i++){
            if(arrayOfStocks.get(i).getWKNPortfolio().equals(WKN)){
                return i;
            }
    } return -1;

}

        //kauft eine Aktie, überprüft ob Aktie schon vorhanden, falls vorhanden nur Hinzufügen, falls nicht neue Position

     void buyStock(String name,String WKN, String artWertpapier,int stueckzahl){
        //int indexNumberUebersicht = getIndexFromClient
         if(findPositionByWKN(WKN) >= 0){
             int indexNumber = findPositionByWKN(WKN);
             int stueckzahlAlt = arrayOfStocks.get(indexNumber).getStueckzahlPortfolio();
             if(stueckzahlAlt >= 0) {
                 int neueStueckzahl = stueckzahlAlt + stueckzahl;
                 arrayOfStocks.get(indexNumber).setStueckzahlPortfolio(neueStueckzahl);
        }}
         else
             arrayOfStocks.add(new Stock(name,WKN,artWertpapier,stueckzahl));}



        //verkauft eine Aktie, checkt vorher ob genügend da ist

      void sellStock(String WKN,int stueckzahl){
        if(findPositionByWKN(WKN) >= 0){
            int indexNumber = findPositionByWKN(WKN);
            int stueckzahlAlt = arrayOfStocks.get(indexNumber).getStueckzahlPortfolio();
            if(stueckzahlAlt >= stueckzahl) {
                int stueckzahlNeu = stueckzahlAlt - stueckzahl;
                arrayOfStocks.get(indexNumber).setStueckzahlPortfolio(stueckzahlNeu);
            } else {System.out.println("Das Portfolio verfügt nicht oder in zu geringem Maße über die Aktie");}
    }}






    public String getNamePortfolio() {
        return namePortfolio;
    }

    public void setNamePortfolio(String namePortfolio) {
        this.namePortfolio = namePortfolio;
    }

    public  ArrayList<Stock> getArrayOfStocks() {
        return arrayOfStocks;
    }

    public void setArrayOfStocks(ArrayList<Stock> arrayOfStocks) {
        this.arrayOfStocks = arrayOfStocks;
    }

    @Override
    public String toString(){
        return this.namePortfolio;
    }




    }



