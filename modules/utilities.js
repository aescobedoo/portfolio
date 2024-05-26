//CSS style builder based from an object
export default function createStylesfromObj(DOMelement, obj){
  if (DOMelement) {
    let keys = Object.keys(obj); // Get the keys of the object
    for (let i = 0; i < keys.length; i++) {
      let property = keys[i];
      DOMelement.style[property] = obj[property];
    }
  }
};


export { createStylesfromObj };