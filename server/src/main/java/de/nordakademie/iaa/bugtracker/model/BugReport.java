package de.nordakademie.iaa.bugtracker.model;

import java.util.Date;

/**
 * Klasse für den Fehlerbericht
 *
 * @author Dorian Valero, Marlon Hippler
 */

public class BugReport {

    private int bugId;
    private String headline;
    private String description;
    private BugStatus status;
    private User arranger;
    private User creator;
    private Date date;
    private Date updated;
    private Date closed;


    // Alle Getter-Methoden
    public int getBugId() {
        return bugId;
    }

    public String getHeadline() {
        return headline;
    }

    public String getDescription() {
        return description;
    }

    public BugStatus getStatus() {
        return status;
    }

    public User getArranger() {
        return arranger;
    }

    public User getCreator() {
        return creator;
    }

    public Date getDate() {
        return date;
    }

    public Date getUpdated() {
        return updated;
    }

    public Date getClosed() {
        return closed;
    }

    //Alle Setter-Methoden


    public void setBugId(int bugId) {
        this.bugId = bugId;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(BugStatus status) {
        this.status = status;
    }

    public void setArranger(User arranger) {
        this.arranger = arranger;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public void setClosed(Date closed) {
        this.closed = closed;
    }
}
