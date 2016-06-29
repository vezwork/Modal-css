# Modal-js
Super small (1.5kb), durable, and easy modal windows!

### Beautiful modal windows in 3 easy steps:

1. Include the minified javascript:
  `<script src="pathto/modal.min.js"></script>`
  
2. Create a new modal window:
  ```
  myModal = new Modal("modal"); // creates a modal in dom with the class "modal".
  
  myModal.setAnim("cssAnimationIn", "cssAnimationOut"); // specify entry and exit css animation names.
  
  myModal.set("<b>hey I'm a modal!</b>"); // Set the content of the modal window.
  ```
  or
  `myModal = new Modal("modal").setAnim("cssAnimationIn", "cssAnimationOut").set("<b>hey I'm a modal!</b>");`
  make sure you specify an `animation-duration' for your class in css
  
3. Use `myModal.show(content);`, `myModal.hide();`, or `myModal.toggle();` to control your modal.
  for example:
  ```
  <button onclick="myModal.toggle();">
        toggle
  </button>
  ```

### Still not convinced?
check out the examples folder for simple useages of modal js.

### Further documentation
in `new Modal(el)` el can be
1. An html element you wish to add modal capabilities to.
2. A className for use in css styling.
3. Nothing which uses the default className "modal"

in `myModal.setAnim(animIn, animOut)` if only animIn is specified the exit animation will use the entrance animation reversed.
