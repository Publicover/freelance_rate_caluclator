import { Controller } from "stimulus"

export default class extends Controller{
  static targets = ["rate", "output"]

  calculate() {
    var hourlyRate = parseInt(this.rateTarget.value)
    this.outputTarget.textContent = `You make ${hourlyRate + 10}.`;
  }
}
