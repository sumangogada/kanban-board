import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { kanbanInputComponent } from './kanban-input/kanban-input.component';

const routes: Routes = [
    { path: '', component: kanbanInputComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
