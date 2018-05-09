import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-stop-workout',
    template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>
        <p>You already got {{ passedData.progress }}%!</p>
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-raised-button color="warn" [mat-dialog-close]="true">Yes</button>
        <button mat-raised-button color="primary" [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
    `
})
export class StopWorkoutComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
