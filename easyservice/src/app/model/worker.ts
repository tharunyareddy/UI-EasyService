export class Worker {
  constructor(
    public workerId: number,
    public workerName: string,
    public workType: string,
    public availability: string,
    public contactNumber: string,
    public workingHours: number,
    public workerImg: string
  ) {}
}
