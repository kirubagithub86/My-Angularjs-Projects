import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent} from './education/education.component';
import { ProjectComponent} from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestComponent } from './interest/interest.component';
import { CompetenciesComponent } from './competencies/competencies.component';

const routes: Routes = [
  {path:"personal",component:PersonalComponent },
  {path:"education",component:EducationComponent},
  {path:"project",component:ProjectComponent},
  {path:"skills",component: SkillsComponent},
  {path:"interest",component:InterestComponent},
  {path:"competencies",component:CompetenciesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
