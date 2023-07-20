import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestComponent } from './interest/interest.component';
import { CompetenciesComponent } from './competencies/competencies.component';


@NgModule({
  declarations: [
    PersonalComponent,
    EducationComponent,
    ProjectComponent,
    SkillsComponent,
    InterestComponent,
    CompetenciesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
