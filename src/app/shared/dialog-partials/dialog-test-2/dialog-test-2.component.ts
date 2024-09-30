import { Component, OnInit } from '@angular/core';
import { DialogFooterComponent } from '../dialog-footer/dialog-footer.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-test-2',
  standalone: true,
  imports: [DialogFooterComponent],
  templateUrl: './dialog-test-2.component.html',
  styleUrl: './dialog-test-2.component.scss',
})
export class DialogTest2Component implements OnInit {
  isNew!: boolean;

  constructor(public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    
  }
}
