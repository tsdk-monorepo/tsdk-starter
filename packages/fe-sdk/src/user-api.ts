
      
      /** 
       * 
       * api-user.ts 
       * fe-sdk@1.0.0 
       * 
       **/

      import genApi from './gen-api';
     

      import {
          
          GetHelloConfig,
          GetHelloReq,
          GetHelloRes,
        
          UpdateHelloConfig,
          UpdateHelloReq,
          UpdateHelloRes,
        
        } from './apiconf-refs';
      
      
          /** 
           * Get hello
           * 
           * @category hello
           */
          export const GetHello = genApi<GetHelloReq, GetHelloRes>(GetHelloConfig);
        
          /** 
           * Update hello
           * 
           * @category hello
           */
          export const UpdateHello = genApi<UpdateHelloReq, UpdateHelloRes>(UpdateHelloConfig);
        
    