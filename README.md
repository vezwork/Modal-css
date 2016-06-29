# Modal-js
Super small (1.5kb), durable, and easy modal windows!

### Beautiful modal windows in 3 easy steps:

1. Include the minified javascript:
  `<script src="pathto/modal.min.js"></script>`
  
2. Create a new modal window:
  ```
  myModal = new Modal("modal"); // creates a modal in dom with the class "modal".
  
  myModal.setAnim("cssAnimationIn", "cssAnimationOut"); // specified entry and exit css animation names.
  
  myModal.set("<b>hey I'm a modal!</b>"); // Set the content of the modal window.
  ```
  or
  `myModal = new Modal("modal").setAnim("cssAnimationIn", "cssAnimationOut").set("<b>hey I'm a modal!</b>");`
  as a note you can pass a single animation for both entry and exit. Or not use setAnim at all for non-animated modals.
  
3. Use `myModal.show(content);`, `myModal.hide();`, or `myModal.toggle();` to control your modal.
  for example:
  ```
  <button onclick="myModal.toggle();">
        toggle
  </button>
  ```

### Still not convinced?
check out the examples folder for simple useages of modal js.
