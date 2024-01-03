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

When component is loaded --> parent constructor called --> then render method is called --> then while rendering the parent component, we got a child component inside render --> then child component starts loading --> child constructor called --> then child render is called --> as the mouting is finished for child component, our componentDidMount method of child is called --> as now the parent is rendered successfully, so now our componentDidMount method of parent is called
