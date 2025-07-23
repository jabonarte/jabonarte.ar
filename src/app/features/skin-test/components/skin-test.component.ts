import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SkinTestAnswer, SkinTestQuestion } from '../../../shared/models';
import { SkinTestService } from '../services/skin-test.service';

@Component({
  selector: 'app-skin-test',
  templateUrl: './skin-test.component.html',
  styleUrls: ['./skin-test.component.scss'],
  imports: [CommonModule],
})
export class SkinTestComponent implements OnInit {
  questions: SkinTestQuestion[] = [];
  currentQuestion: SkinTestQuestion | null = null;
  currentQuestionIndex: number = 0;
  isTestActive: boolean = false;
  isTestCompleted: boolean = false;
  result: any = null;
  loading: boolean = false;
  progress: number = 0;
  answers: SkinTestAnswer[] = [];

  constructor(private skinTestService: SkinTestService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.loading = true;
    this.skinTestService.getQuestions().subscribe({
      next: (questions) => {
        this.questions = questions;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading questions:', error);
        this.loading = false;
      },
    });
  }

  startTest(): void {
    this.isTestActive = true;
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[0];
    this.answers = [];
    this.updateProgress();
  }

  answerQuestion(answer: SkinTestAnswer): void {
    this.answers[this.currentQuestionIndex] = answer;
    this.updateProgress();

    // Avanzar automáticamente como en target.js
    if (this.currentQuestionIndex < this.questions.length - 1) {
      setTimeout(() => {
        this.nextQuestion();
      }, 500); // Pequeño delay para mostrar la selección
    } else {
      // Última pregunta, completar el test
      setTimeout(() => {
        this.completeTest();
      }, 500);
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.updateProgress();
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.updateProgress();
    }
  }

  completeTest(): void {
    this.result = this.skinTestService.calculateResult(this.answers);
    this.isTestCompleted = true;
    this.isTestActive = false;
  }

  resetTest(): void {
    this.isTestActive = false;
    this.isTestCompleted = false;
    this.currentQuestionIndex = 0;
    this.currentQuestion = null;
    this.answers = [];
    this.result = null;
    this.progress = 0;
  }

  private updateProgress(): void {
    this.progress =
      ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  get canGoNext(): boolean {
    return this.currentQuestionIndex < this.questions.length - 1;
  }

  get canGoPrevious(): boolean {
    return this.currentQuestionIndex > 0;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  isOptionSelected(optionId: string): boolean {
    const currentAnswer = this.answers[this.currentQuestionIndex];
    return currentAnswer?.selectedOptionId === optionId;
  }
}
