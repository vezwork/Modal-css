//preserve display value rather than always changing it to block on show/toggle?
function Modal(el) {
//el is either a dom node to modal-ify, or a className string.
    
    this.shown = false;
    this.animating = 0; //0 not animating, 1 animating in, 2 animating out
    this.queued = false; //for animation queueing, true if an animation is queued

    //initialize dom
    if (typeof el === "object") {
        this.dom = el;
        if (this.dom.style.display == "none") this.shown = false;
    } else {
        this.dom = document.createElement("div");
        this.dom.id = (typeof el === "string")?el:"modal";
        this.dom.style.display = "none";
        document.body.appendChild(this.dom);
    }
}

Modal.prototype.show = function() {
    this.dom.style.display = "block";
    
    if (this.inAnim) { //if animations are used
        if (this.animating==0) { //not animating currently
            if (!this.shown) {
                this.dom.style.animationName = this.inAnim;
                this.animating = 1;
                this.shown = true;                 
            }
        } else {
            this.queued = (this.animating==1)?false:true;
        }
    } else {
        this.shown = true;
    }
    
    return this;
}

Modal.prototype.toggle = function() {
    if (this.shown) {
        this.hide();
    } else {
        this.show();
    }
    
    return this;
}

Modal.prototype.hide = function() {
    if (this.outAnim) { //if animations are used
        if (this.animating==0) { //not animating currently
            if (this.shown) {
                this.dom.style.animationName = this.outAnim;
                this.animating = 2;
                this.shown = false;
            }
        } else {
            this.queued = (this.animating==2)?false:true;
        }
    } else {
        this.dom.style.display = "none";
        this.shown = false;
    }
    
    return this;
}

Modal.prototype.set = function(content, selector, property) {
    if (selector) {
        this.dom.querySelector(selector)[property || 'innerHTML'] = content;
    } else {
        this.dom[property || 'innerHTML'] = content;
    }
    
    return this;
}

Modal.prototype.setAnim = function(inAnim, outAnim) {
    
    if (!this.inAnim) this.dom.addEventListener("animationend", function() {
        this.dom.style.animationName = "";
        this.animating = 0;
        
        if (!this.shown) {
            this.dom.style.display = "none";
            if (this.inAnim === this.outAnim) {
                this.dom.style.animationDirection = "normal";
            }
        } else if (this.inAnim === this.outAnim) {
            this.dom.style.animationDirection = "reverse";
        }
        
        setTimeout(function() {
            if (this.queued) {
                this.queued = false;
                this.toggle();
            }
        }.bind(this), 0);
    }.bind(this));

    if (!inAnim) throw "setAnim requires at least an intro animation name string";
    if (outAnim) {
        this.inAnim = inAnim;
        this.outAnim = outAnim;
    } else {
        this.inAnim = inAnim;
        this.outAnim = inAnim;
    }
    
    return this;
}