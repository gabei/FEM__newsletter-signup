const constraints = {
  name: {
    presence: true,
    length: {
      minimum: 2,
      maximum: 20
    }, 
    format: {
      pattern: "[a-zA-Z]",
      message: "Name may only contain letters."
    }
  },
  email: {
    presence: true,
    email: true
  }
}

export default constraints;