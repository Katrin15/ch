import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatTabsModule} from '@angular/material/tabs';
import { MatRippleModule} from '@angular/material/core';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule} from '@angular/material/select';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { CdkScrollableModule} from '@angular/cdk/scrolling';

const MaterialComponents = [
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatSelectModule,
  MatExpansionModule,
  MatProgressBarModule,
  CdkScrollableModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }