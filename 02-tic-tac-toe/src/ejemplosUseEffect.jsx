import { useState, useEffect} from "react"

const Component = () => {
    const [value, setValue] = useState(false);

    // useEffect(codeToExecute, listOfDependecies);
    useEffect(() => {
     // COMO MINOMO SE EJECUTARA UNA VEZ
        console.log("El codigo a ejecutar");
    }, listOfDependecies /* ESTO ES OPCIONAL */);
}