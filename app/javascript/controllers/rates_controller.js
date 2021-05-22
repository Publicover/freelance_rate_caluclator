import { Controller } from "stimulus"

export default class extends Controller{
  static targets = ["rate", "output"]

  calculate() {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    var dayRate = parseInt(this.rateTarget.value);
    this.outputTarget.textContent = `You should be charging ${formatter.format(dayRate / 80)} per day, aiming for 80 fully booked days. `;
  }
}
