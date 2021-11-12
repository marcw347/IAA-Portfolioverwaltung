package de.nordakademie.iaa.bugtracker.model;

/**
 * Beinhaltet alle Zustände eines Fehlers
 *
 * @author Dorian Valero, Marlon Hippler
 */

public enum BugStatus {

    OPENED,
    IN_PROGRESS,
    REOPENED,
    CLOSED,
    REJECTED,
    FIXED
}
