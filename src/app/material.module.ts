import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL = [MatButtonModule,
                  MatIconModule,
                  MatNativeDateModule,
                  MatInputModule, MatRadioModule,
                  MatDatepickerModule,
                  MatCardModule,
                  MatFormFieldModule,
                  MatListModule,
                  MatCheckboxModule,
                  MatToolbarModule,
                  MatDividerModule];

@NgModule({
  imports: MATERIAL,
  exports: MATERIAL
})
export class MaterialModule {

}
