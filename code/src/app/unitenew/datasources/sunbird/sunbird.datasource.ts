import { SunbirdProfileDataService } from './collections/profile.dataservice';
import { SunbirdCoursesDataService } from './collections/courses.dataservice';
import { SunbirdMockDataService } from './collections/mock.dataservice';

import { SBGraphDataSource } from './collections/graph.datasource';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ServiceCollection =  {
                            'default' : SunbirdMockDataService,
                            'mockService' : SunbirdMockDataService,
                            'sbprofile'   : SunbirdProfileDataService,
                            'sbcourses' : SunbirdCoursesDataService
                        }

@Injectable()
export class SunbirdDataSource
{
    private dsConfigObj;

    constructor(private config, private _httpClient? : HttpClient )
    {
        // let dsConfig = (config['dsName'] && rsCollection[config['dsName']])
        //                 ? rsCollection[config['dsName']]
        //                 : rsCollection['default'];

        // this.dsConfigObj = new dsConfig(config, _httpClient);
    }

    getData(serviceName)
    {
        let dsName = serviceName && ServiceCollection.hasOwnProperty(serviceName) 
                        ? ServiceCollection[serviceName]
                        : ServiceCollection['default'];

        let dsObj = new dsName(this.config, this._httpClient);
        return dsObj.getData().map(asdf => {
            console.log("Inside mapaaa");
            return asdf;
        });
    }

    setRoutes(baseSegment)
    {
        let myRouteObj = [
            {path : "", service : "mockService", renderer : "sbHome"},
            {path : "courses", service : "sbcourses", renderer : "carousel"},
            {path : "profile", service : "sbprofile", renderer : "personal"}

        ]

        return myRouteObj;
    }
}