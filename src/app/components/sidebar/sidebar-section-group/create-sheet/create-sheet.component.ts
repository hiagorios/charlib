import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SheetType } from 'src/app/enum/SheetType';

interface SheetTypeOption {
  name: SheetType;
  value: string;
}

@Component({
  selector: 'app-create-sheet',
  templateUrl: './create-sheet.component.html',
  styleUrls: ['./create-sheet.component.scss']
})
export class CreateSheetComponent implements OnInit {

  @Input() visible: boolean;

  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

  sheetForm: FormGroup;

  sheetTypeOptions: SheetTypeOption[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sheetTypeOptions = this.getSheetTypeOptions();
    this.initializeForm();
  }

  getSheetTypeOptions(): SheetTypeOption[] {
    return Object.entries(SheetType).map(opt => {
      return { name: opt[1], value: opt[0] };
    });
  }

  save(): void {
    // TODO: use a state management library
  }

  handleClose(): void {
    this.sheetForm.reset();
    this.closeDialog.emit(false);
  }

  initializeForm(): void {
    this.sheetForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: [undefined, [Validators.required]]
    });
  }

}
