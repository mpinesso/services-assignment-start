export class CounterService{

  activatedCount = 0;
  deactivatedCount = 0;

  incActivatedCount(){
    this.activatedCount = this.activatedCount + 1;
    console.log("Users activated: " + this.activatedCount);
  }

  incDeactivatedCount(){
    this.deactivatedCount++;
    console.log("Users deactivated: " + this.deactivatedCount);
  }
}
