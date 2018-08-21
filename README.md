
![animated](https://res.cloudinary.com/voyade/image/upload/v1534841898/misc/notifications.gif)

Installation:

`npm install react-css-transition --save`


Usage:

Move component in your highest main react component.

```
import Notifications from "./Notifications"


class Main extends React.Component {

    render(){
        return (
            <div>
                <Notifications/>
            </div>
        )
    }
}
```

call notification anywhere inside your main component or child components

```
import {showNotification} from "./Notifications"

showNotification({text: "We could not find any data!", shown: true})
```
