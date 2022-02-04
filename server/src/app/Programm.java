package app;


import javax.sound.midi.Soundbank;
import java.sql.SQLOutput;
import java.util.ArrayList;

public class Programm {
    public static void main(String[] args) {

        Portfolioübersicht Übersicht = new Portfolioübersicht();
        Übersicht.addPortfolio("Portfolio1");
        Übersicht.addPortfolio("Portfolio2");
        Übersicht.addPortfolio("Portfolio3");

        Übersicht.getArrayOfPortfolios().get(0).buyStock("Apple", "A2JK3", "Aktie", 200);
        Übersicht.getArrayOfPortfolios().get(0).buyStock("Amazon", "XAK3L", "Aktie", 30);
        Übersicht.getArrayOfPortfolios().get(0).buyStock("MSCI World", "AKSL3", "ETF", 35);

        Übersicht.getArrayOfPortfolios().get(1).buyStock("Square", "hahahiho", "Aktie", 30);
        Übersicht.getArrayOfPortfolios().get(1).buyStock("Apple", "A2JK3", "Aktie", 10);

        Übersicht.getArrayOfPortfolios().get(2).buyStock("a", "b", "c", 0);

        System.out.println(Übersicht.getArrayOfPortfolios());

        Übersicht.deletePortfolio("Portfolio3");
        Übersicht.deletePortfolio("Portfolio2");

        System.out.println(Übersicht.getArrayOfPortfolios());


        System.out.println(Übersicht.getArrayOfPortfolios().get(0).getArrayOfStocks());

        Übersicht.moveStock("Portfolio2", "Portfolio1", "A2JK3", 10);
        Übersicht.moveStock("Portfolio2", "Portfolio1", "hahahiho", 30);
        Übersicht.moveStock("Portfolio2", "Portfolio1", "hahahiho", 30);

        Übersicht.getArrayOfPortfolios().get(1).getArrayOfStocks();
        Übersicht.getArrayOfPortfolios().get(0).getArrayOfStocks();

        Übersicht.deletePortfolio("Portfolio2");


    }
}
