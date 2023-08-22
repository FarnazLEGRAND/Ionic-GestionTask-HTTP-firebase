export class Task{
  public id?: string
  constructor(
    public title: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public priority: number){}
}

// export interface Task{
//     id?: string,
//     title: string,
//     description: string,
//     startDate: Date,
//     endDate: Date,
//     priority: number
//   }