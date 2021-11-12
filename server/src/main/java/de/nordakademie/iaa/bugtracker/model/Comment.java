package de.nordakademie.iaa.bugtracker.model;

import java.util.Date;

public class Comment {

    private int commentID;
    private User developer;
    private BugReport bugReport;
    private String comment;
    private Date lastChange;
    private Date issueDate;

    /*
    Alle Getter-Methoden
     */

    public int getCommentID() {
        return commentID;
    }

    public User getDeveloper() {
        return developer;
    }

    public BugReport getBugReport() {
        return bugReport;
    }

    public String getComment() {
        return comment;
    }

    public Date getLastChange() {
        return lastChange;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    /*
    Alle Setter-Methoden
     */

    public void setCommentID(int commentID) {
        this.commentID = commentID;
    }

    public void setDeveloper(User developer) {
        this.developer = developer;
    }

    public void setBugReport(BugReport bugReport) {
        this.bugReport = bugReport;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setLastChange(Date lastChange) {
        this.lastChange = lastChange;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }
}
