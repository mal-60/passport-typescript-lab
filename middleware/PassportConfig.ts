import passport from 'passport';

import { PassportStrategy } from '../interfaces';

export default class PassportConfig {

    /* constructor(strategies: PassportStrategy[]) {
        this.addStrategies(strategies);
        }
    */

    /*
     FIX ME 😭
     The problem with this class is... if the caller forgets to call
     the addStrategies method...our program won't work. 

     Solution: You should refactor this class to take a constructor
     which receives strategies: PassportStrategy[]. Internally...call 
     the addStrategies method within the constructor and make addStragies
     private from the outside world. This way, we can GUARANTEE that our
     passport strategies are added when this class is created. ⭐️
    */

    /* private */ addStrategies(strategies: PassportStrategy[]): void {
       strategies.forEach((passportStrategy: PassportStrategy) => {
           passport.use(passportStrategy.name, passportStrategy.strategy);
       });
   }
}

/* 
My refactoring would sometimes allow the server to run. If I try to run the server for the first time, 
it won't run. However, when I comment them out and then uncomment them back, the server would run fine 
even if there's 'errors'. 
*/
