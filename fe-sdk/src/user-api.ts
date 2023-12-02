
      
      /** 
       * 
       * api-user.ts 
       * fe-sdk@1.0.0 
       * 
       **/

      import genApi from './gen-api';
     

      import {
          
          GetHelloConfig,
          type GetHelloReq,
          type GetHelloRes,
        
          UpdateHelloConfig,
          type UpdateHelloReq,
          type UpdateHelloRes,
        
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
        
    