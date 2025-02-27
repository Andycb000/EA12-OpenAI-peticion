import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { OpenaiService } from '../openai.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonLabel, IonButton],
})
export class HomePage {
  constructor(private router: Router, private openAIService: OpenaiService) { }

  ideaPrompt: string = '';
  generatedIdea: string = '';

  async generateIdea() {
    if (this.ideaPrompt.trim() === '') {
      alert('Por favor ingresa una idea inicial');
      return;
    }

    this.generatedIdea = await this.openAIService.generateIdea(this.ideaPrompt);
  }
}