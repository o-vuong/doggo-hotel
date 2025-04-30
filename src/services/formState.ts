import type { z } from "zod";

export type FormStep<T> = {
  schema: z.ZodType<T>;
  defaultValues: T;
};

export class FormStateService<T extends Record<string, unknown>> {
  private steps: FormStep<T>[];
  private currentStep: number;
  private formData: Partial<T>;

  constructor(steps: FormStep<T>[]) {
    this.steps = steps;
    this.currentStep = 0;
    this.formData = {};
  }

  getCurrentStep() {
    return this.currentStep;
  }

  getTotalSteps() {
    return this.steps.length;
  }

  getStepData() {
    return this.steps[this.currentStep];
  }

  getFormData() {
    return this.formData;
  }

  updateStepData(data: Partial<T>) {
    this.formData = { ...this.formData, ...data };
  }

  validateCurrentStep() {
    const currentStep = this.steps[this.currentStep];
    return currentStep.schema.safeParse(this.formData);
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      return true;
    }
    return false;
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      return true;
    }
    return false;
  }

  reset() {
    this.currentStep = 0;
    this.formData = {};
  }

  isLastStep() {
    return this.currentStep === this.steps.length - 1;
  }

  isFirstStep() {
    return this.currentStep === 0;
  }
} 