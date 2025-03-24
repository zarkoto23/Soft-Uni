function createPerson(firstName, lastName) {
  let _firstName = firstName;
  let _lastName = lastName;

  return {
    get firstName() {
      return _firstName;
    },
    set firstName(value) {
      _firstName = value;
      this.fullName = `${_firstName} ${_lastName}`;
    },

    get lastName() {
      return _lastName;
    },
    set lastName(value) {
      _lastName = value;
      this.fullName = `${_firstName} ${_lastName}`;
    },
    get fullName() {
      return `${_firstName} ${_lastName}`;
    },

    set fullName(value) {
      const [first, last] = value.split(" ");
      if (first && last) {
        _firstName = first;
        _lastName = last;
      } else {
        return `${_firstName} ${_lastName}`;
      }
    },
  };
}
