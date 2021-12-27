import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

// import { SharedRoutingModule } from './shared-routing.module';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { SamplePageComponent } from './components/sample-page/sample-page.component';
import { TitleComponent } from './components/title/title.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ItemQuantityComponent,
    SamplePageComponent,
    TitleComponent,
    WordWrapPipe
  ],
  imports: [
    CommonModule,
    // SharedRoutingModule,
    MatIconModule, 
    MatButtonModule, 
    MatTooltipModule, 
    MatMenuModule,
    MatSnackBarModule,
    RouterModule
  ],
  exports: [
    ItemQuantityComponent,
    SamplePageComponent,
    TitleComponent,
    WordWrapPipe,

    MatSnackBarModule,
    MatIconModule, 
    MatButtonModule, 
    MatTooltipModule, 
    MatMenuModule
  ]
})
export class SharedModule { }
