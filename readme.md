**\*\***\*\*\***\*\***Food Villa App Layout\***\*\*\*\*\*\***

/\*\*

- Header
- -Logo
- -Navbar
- Body
- -Search
- -ReataurantContainer
-      -ReataurantCard
- Footer
- -Copyright
- -Links
- -Address
- -Contact
  \*/

\***\*\*\*\*\*\*** React Hooks \***\*\*\*\*\***\*\***\*\*\*\*\***
(Normal JS Utility Functions)
to use hooks we import them from react as named import

- useState() -> Super powerful state variables in react
- useEffect()

**\*\***\*\*\*\***\*\***Parent-Child Relationship Lifecycle Method**\*\***\*\***\*\***

When component is loaded --> parent constructor called --> then render method is called --> then while rendering the parent component, we got a child component inside render --> then child component starts loading --> child constructor called --> then child render is called --> as the mouting is finished for child component --> (DOM updated in SIngle Batch) --> our componentDidMount method of child is called --> as now the parent is rendered successfully, so now our componentDidMount method of parent is called

**\*\***\***\*\***Reason to make API calls inside componentDidMount**\*\***\***\*\***

As in functional components, we make API calls inside useEffect(), as our component is rendered first and then API call is made and then component gets re-rendered with data, so the user dosen't need to wait --> to achieve the same scenario, we make API calls within componentDidMount method

For multiple children, then render phase are batched and commit phase are batched for optimization purpose, so
Parent constructor --> Parent render --> Child 1 constructor --> Child 1 render --> Child 2 constructor --> Child 2 render --> (Dom Updated in Single Batch) --> Child 1 componentDidMount --> Child 2 componentDidMount --> Parent componentDidMount
