//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextModule,
    ToastModule,
    PasswordModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    DividerModule,
    TabViewModule,
  ],
})
export class AuthModuleModule {}
