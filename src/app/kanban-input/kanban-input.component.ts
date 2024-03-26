import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-dialog",
  templateUrl: "./kanban-input.component.html",
  styleUrls: ["./kanban-input.component.scss"],
})
export class kanbanInputComponent {
  constructor(
    public dialogRef: MatDialogRef<kanbanInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  /**
   * On cancelling the dialog box
   */
  onCancel(): void {
    this.dialogRef.close();
  }
}
