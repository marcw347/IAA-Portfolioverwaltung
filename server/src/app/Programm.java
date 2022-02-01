package app;


import javax.sound.midi.Soundbank;
import java.sql.SQLOutput;
import java.util.ArrayList;

public class Programm {
    public static void main(String[] args){



        Portfolio Portfolio1 = new Portfolio("Portfolio1");
        Portfolio1.buyStock("Hans","WKnummer","Art",12);
        System.out.println(Portfolio1.getArrayOfStocks().get(0).toString());
        Portfolio1.buyStock("Hans","WKnummer","Art",10);
        System.out.println(Portfolio1.getArrayOfStocks().get(0));
        Portfolio1.buyStock("Franz","Hallo","Art2",1);
        Portfolio1.sellStock("Hallo",10);
        System.out.println(Portfolio1.getArrayOfStocks().get(0));
        System.out.println(Portfolio1.getArrayOfStocks().get(1));




        Portfolioübersicht Übersicht = new Portfolioübersicht();
        Übersicht.addPortfolio("PortfolioA");
        Übersicht.addPortfolio("PortfolioB");
        Übersicht.getArrayOfPortfolios().get(0).buyStock("Marcel","ist","cool",3);
                                        //hier Index aus Client                                                     auch dieser Index aus dem Client
        Übersicht.getArrayOfPortfolios().get(0).sellStock(Übersicht.getArrayOfPortfolios().get(0).arrayOfStocks.get(0).getWKNPortfolio(), 2);
        System.out.println(Übersicht.getArrayOfPortfolios().get(0).getArrayOfStocks().get(0));
        Übersicht.moveStock("PortfolioA","PortfolioB","ist",1);

        System.out.println(Übersicht.getArrayOfPortfolios().get(0).getArrayOfStocks().get(0));
        System.out.println(Übersicht.getArrayOfPortfolios().get(1).getArrayOfStocks().get(0));

        Übersicht.addPortfolio("PortfolioA");









    }
}
