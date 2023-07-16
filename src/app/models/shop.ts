export interface Shop{
    shopId:number;
    name:string;
    isPospection:boolean;
    firstPhone:string;
    iswhatsappFirstPhone:boolean;
    gpsLongigtude:string;
    gpsLatitude:string;
    secondPhone:string;
    iswhatsappSecondPhone:boolean;
    creatingDate:Date;
    city: string;
    joiningDate:Date;
    districtId:number;
    imageId:number | null;
    numberOfOrder:number | null;
    numberOfBags:number | null;
}