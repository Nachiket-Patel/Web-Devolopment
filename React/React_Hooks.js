/*
* start with "use" (both react and custom hooks).
* Components must be in Uppercase.
* invoke inside function/components body.
* Don't call hooks inside conditions like if-else.
* set function don't update state immidiately 

*/

/*
        *Hook                   Use
    1-useState    -    To track values and update value in UI. 

    2-useEffect     -   To apply side effect to useState hook, to control its effects.
                    -   fetching data, directly updating the DOM, and timers.
                    -   No dependency passed: Runs on every render.
                    -   empty array: Runs only on the first render.
                    -   Props or state values: Runs on the first render, And any time any dependency value  changes.


    3-useContext    -   To pass prop to only specific component rather than passing on every component.

    4-useRef    -   It works as useState but updating it won't trigger re-render.
                -   Accessing DOM Elements.
                -   Tracking State Changes to keep track of previous state values.

    */
