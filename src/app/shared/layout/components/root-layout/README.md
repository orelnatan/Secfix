## Root Layout Component 
Should be called at the root level of each module including AppModule(only in AppModule it must be called with "forRoot=true")

# root-layout-main
- height: $full-screen-height; => This container is supposed to be stretched by its child elements or to be expanded automatically under its parent element's space. Either way, it eventually allows the bottom elements to be stretched to 100% height.

# layout-top
- position: fixed; => This allows the container and all of its children to be fixed to its location, so it will always be visible to the user also when scrolling vertically or horizontally.

- width: $full-screen-width; => Because the container is "fixed", it cannot expand to 100% width by default, so this line is necessary.

- z-index: 9999; => Prevents inner elements to be rendered on top of this container.

# layout-body
- display: inline-flex; => this container has two children that must be aligned next to each other in a row, so we use "flex" grid here. Also, this flex behavior makes the container automatically stretch to its parent element's full height.

- width: $full-screen-width; => This container cannot expand to 100% width by default, this line is necessary in order to allow child elements free space to expend.

- height: $full-screen-height; => This container cannot expand to 100% height by default, this line is necessary in order to allow child elements free space to expend.

- [style.padding-top.px]="layoutTop.clientHeight" - "layoutTop" is a reference to the "layout-top" div that its height is determined by its content, so we are using its "clientHeight" property to know how much padding-top the "body" layer needs in order to prevent overlap between the two layers.

- forRoot flag & [style.position]="forRoot ? 'absolute' : 'static'" => 
This flag indicates that the current <root-layout> component is called at the most top-level root module(probably in AppModule). 
    
    * With this flag sets to true, the body element will be set to "position: absolute", so that it can expand freely over the entire width/height of the   page. It's supposed to be only one instance(in the application) of this component called with this flag enabled. If another lower <root-layout> component will be called with "forRoot=true", it will cause redundant vertical scrolling in case of adding any HTML content at the root level, since we now have more than one layer that needs to be at the screen height.  

    * With this flag sets to false, the body element will be set to "position: static", so that it can expand freely over the entire width/height of it's parent only. The "<root-layout>" at the most top-level module is the only instance that should be called with "forRoot=true", so it will allow the application to use the full size of the screen. All other lower "<root-layout>" instances will be called with "forRoot=false" and will be expanded by the parent's remaining space(height: 100%), without the cost of redundant vertical scrolling.

# side-navbar-container
- position: fixed; => This allows the container and all of its children to be fixed to its location, so it will always be visible to the user also when scrolling vertically or horizontally.

- width: $full-screen-height; => Because the container is "fixed", it cannot expand to 100% height by default, so this line is necessary.

- z-index: 9999; => Prevents inner elements to be rendered on top of this container.

# inner-content-container
- width: $full-screen-width; => This container is responsible to render and hold the next lower level in the hierarchy, the line width: 100% allows it to expand to the full width of the remaining space of its parent's element(layout-body).

- [style.padding-left.px]="sidebarContainer.clientWidth"; => "sidebarContainer" is a reference to the "side-navbar-container" div that its width is determined by its content, so we are using its "clientWidth" property to know how much padding-left the "inner-content" layer needs in order to prevent overlap between the two layers.

