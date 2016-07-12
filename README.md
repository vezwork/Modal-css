# Modal-css
###### Super small (1.5kb minified), customizable, and easy modal windows in js using css animations.

### Beautiful modal windows in 3 easy steps:

1. `npm install modal-css` Then import Modal.Modal using your favorite package manager or simply using `<script src="pathto/Modal.min.js"></script>` 
  
2. Create a new modal window:
  ```
  myModal = new Modal.Modal(); // creates a modal in dom with the id "modal".
  
  myModal.setAnim("cssAnimationIn", "cssAnimationOut"); // specify entry and exit css animation names.
  
  myModal.set("<b>hey I'm a modal!</b>"); // Set the content of the modal window.
  ```
  or
  `myModal = new Modal.Modal().setAnim("cssAnimationIn", "cssAnimationOut").set("<b>hey I'm a modal!</b>");`
  And make sure you specify an `animation-duration` and some style for your modal in css.
  
3. Use `myModal.show();`, `myModal.hide();`, or `myModal.toggle();` to control your modal.
  for example:
  ```
  <button onclick="myModal.toggle();">
        toggle
  </button>
  ```

### Still not convinced?
check out the [examples folder on github](https://github.com/vezwork/Modal-css/tree/master/ex) for simple useages of modal js.

### Further documentation
in `new Modal(el)` el can be

1. An html element you wish to add modal capabilities to.
2. A id for use in css styling.
3. Nothing which uses the default id "modal"

in `myModal.setAnim(animIn, animOut)` if only animIn is specified the exit animation will use the entrance animation reversed.

`myModal.set(content, selector, property)` takes one required argument: the content to insert, and two optional requirements: selector: a css selector which selects a child DOM node of the modal to insert the content into, and propery: the name of the property of the selected DOM to change, defaults to innerHTML. 

`myModal.dom` exposes the actual in-document DOM element of the modal.
