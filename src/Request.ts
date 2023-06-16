export class Request{

    firstName:string;
    userId:number;
    projectId:number;
    typeOfBooking:string;
managerId:number;
    middleName:string;
    lastName:string;
    project:string;
    department:string;
    reasonForTravel:string;
    travelMode:string;
    createdBy:string;
    createdDate:Date;
    modifiedBy:string;
    modifiedDate:Date;
    isActive:boolean;

    constructor()
    {
        this.firstName="",
        this.userId=0;
        this.projectId=0;
        this.typeOfBooking="",
        this.managerId=0;
        this.middleName="",
    this.lastName="",
    this.project="",
    this.department="",
    this.reasonForTravel="",
    this.travelMode="",
    this.createdBy="",
    this.createdDate=new Date,
    this.modifiedBy="",
    this.modifiedDate=new Date,
    this.isActive=false;
    }


}