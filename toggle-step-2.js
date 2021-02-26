     this.step = function (event) {
        switch (this.state) {
        case _off:
         switch (event.tag) {
             case _in:
              ...
              break;
            default:
              ...
         }
         break;
        case _on:
         switch (event.tag) {
             case _in:
              ...
              break;
            default:
              ...
         }
         break;
       default:
         throw "can't happen";
        }
     };
