import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatIconModule
  // MatSliderModule,
  // MatSidenavModule,
  // MatToolbarModule,
  // MatListModule,
  // MatIconModule,
  // MatButtonModule,
  // MatInputModule,
  // MatFormFieldModule,
  // MatMenuModule,
  // MatPaginatorModule,
  // MatTableModule,
  // MatCardModule,
  // MatTooltipModule,
  // MatDialogModule,
  // MatDatepickerModule,
  // MatNativeDateModule,
  // MatSelectModule,
  // MatAutocompleteModule,
  // MatStepperModule,
  // MatTabsModule,
  // MatSelectModule,
  // MatRadioModule,
  // MatCheckboxModule,
  // MatExpansionModule,
  // MatListModule,
  // MatChipsModule,
  // MatBadgeModule,
  // MatSortModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]

})
export class MaterialModule { }
