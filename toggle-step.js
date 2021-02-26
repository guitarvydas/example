*     this.step = function (event) {
* 	switch (this.state) {
* 	case _off:
**         switch (event.tag) {
***             case _in:
****              this.enter (_on);
****              break;
****            default:
****              throw "invalid input port";
**         }
**         break;
* 	case _on:
**         switch (event.tag) {
***             case _in:
****              this.enter (_off);
****              break;
****            default:
****              throw "invalid input port";
**         }
**         break;
*       default:
**         throw "can't happen";
* 	}
