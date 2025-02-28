import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class SignupPage implements OnInit {

  ngOnInit() { }

  //Funcion que se ejecuta al hacer submit del formulario
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) { }

  async onSubmit() {
    try {
      await this.authService.register(this.email, this.password);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error occured during signup.',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/login']); //Redirige al login después del registro
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error occurred during the signup.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  //Función para validar el formato del correo
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email); //Retorna si el correo es válido
  }

  //Función para la navegación
  onSignUp() {
    this.router.navigateByUrl('login');
  }
}









/*
  constructor(private alertController: AlertController, private router: Router) { }
 
  // Función que se ejecuta al hacer submit del formulario
  async onSubmit() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
 
    // Si el email y password son válidos, muestra un mensaje de éxito
    if (this.validateEmail(email) && password) {
      const alert = await this.alertController.create({
        header: 'Signup Success',
        message: 'You have created successfully!',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please complete all.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
 
  // Función para validar el formato del correo
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email); // Retorna true si el correo es válido
  }
 
  // Función para navegación
  onSignUp() {
    this.router.navigateByUrl('login');
  }
 
  */

