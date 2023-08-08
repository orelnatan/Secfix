## Page Layout Component 
Should be called as the main wrapper for every "page" component, responsible to render and hold the actual content of the page.

# page-layout-main
- display: table; => Currently, there are two problems that this line solves:
    
    * It allows the child elements to behave in their natural way, for example - prevents a horizontal row of elements with different lengths from shrinking and dividing the space equally, instead, the elements will maintain their original width.

    * It allows the lower layer "page-content-container" to expand by its inner content and keep all under/sub-elements in their original dimensions(if we omit this line, the container will not expand according to its content and it may cause disturbances with "padding" or "margin" usage in the lower levels).

    note: "display: table;" is an alternative for "width: fit-content;" ("fit-content" doesn't support all browsers)

- The @Input() displayType: string => Provides the option to change the "page-layout-main" CSS display property from "table"(which is the default) to anything else if needed. 

- The @Input() fullHeight/Width: boolean flags => By default, this element will be expanded by its content, but those flags allow it to be expanded to 100% width/height regardless it's content.

* It can be set also using css at the child component:

:host ::ng-deep .page-layout-main {
   width: 100%;
   height: 100%;
}

# page-content-container
- display: inline-flex; => Prevents inner elements to push the upper layer down(with "margin" for example) and creating redundant vertical scrolling.

- width: $full-screen-width; => This container cannot expand to 100% width by default, this line is necessary in order to allow child elements free space to expend.

- height: $full-screen-height; => This container cannot expand to 100% height by default, this line is necessary in order to allow child elements free space to expend.




