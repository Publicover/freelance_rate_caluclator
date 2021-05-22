import { Controller } from "stimulus"

export default class extends Controller{
  static targets = ["rate", "output"]

  calculate() {
    var hourlyRate = parseInt(this.rateTarget.value)
    this.outputTarget.textContent = `You are charging ${hourlyRate} when you should be charging ${hourlyRate + 10}.`;
  }
}
