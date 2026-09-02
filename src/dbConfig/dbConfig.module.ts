import { DynamicModule, Global, Module } from "@nestjs/common";
import { DBConfigService } from "./dbConfig.service";
import { DBConfigController } from "./dbConfig.controller";

@Global()
@Module({})
export class ConfigModule{
    static forRoot(db:{host:string,port:number,database:string}):DynamicModule{
        return{
            module:ConfigModule,
            providers:[
                {
                    provide:'CONFIG',
                    useValue:db,
                },
                {
                    provide:'DATABASE',
                    useFactory:(dbconfig:typeof db)=>{
                        return{
                            connectionString:`${dbconfig.host}${dbconfig.port}${dbconfig.database}`
                        };
                    },
                    inject:['CONFIG']
                },
                

                DBConfigService,

            ],
            controllers:[DBConfigController],
            exports: [DBConfigService,'DATABASE']
        }
    }
}
// @Global()
// @Module({
//     imports:[],
//     controllers:[DBConfigController],
//     providers:[
//         {
//             provide:"DB_CONFIG",
//             useValue:dbConfig,
//         },
//         {
//             provide:"DATABASE",
            
//             useFactory:(dbconfig:typeof dbConfig)=>{
//                 return {
//                     connectionString:`postgresql://${dbconfig.host}:${dbconfig.port}/${dbconfig.database}`
//                 }
//             },
//             inject:["DB_CONFIG"],
//         },
//         DBConfigService,
//     ],

//     exports:[DBConfigService,'DATABASE']
// })
// export class ConfigModule{}