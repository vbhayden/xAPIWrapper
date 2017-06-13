{

  /*
   * Describes an object that an agent interacts with
   * @param {string} id   The unique activity IRI
   * @param {string} name   An English-language identifier for the activity, or a Language Map
   * @param {string} description   An English-language description of the activity, or a Language Map
   */
  class Activity {
    constructor(id, name, description)
    {
      // if first arg is activity, copy everything over
      if(id && id.id){
        Object.assign(this, id);
        return;
      }

      this.objectType = 'Activity';
      this.id = id;

      if (name) {
        this.definition = {};
        this.definition.name = (typeof(name)==='string' || name instanceof String) ? {'en-US': name} : name;
      }

      if (description) {
        this.definition = this.definition || {};
        this.definition.description = (typeof(description)==='string'|| description instanceof String) ? {'en-US': description} : description;
      }
    };
    toString(){
      return JSON.stringify(this, null, '  ');
    };
    isValid(){
      return this.id && (!this.objectType || this.objectType === 'Activity');
    };

    show(){
      console.log(this.toString());
    };

    getType(){ return "Activity" };

    getId(){ return (this.id) ? this.id : undefined };
    getIdString(){ return (this.id) ? this.id : 'unknown' };
  }


  /*
   * An object that refers to a separate statement
   * @param {string} id   The UUID of another statement
   */
  class StatementRef {
    constructor(id)
    {
      this.objectType = 'StatementRef';

      if(id && id.id) {
        Object.assign(this, id);
        return;
      }

      if (id)
        this.id = id;
    };
    toString(){
      return JSON.stringify(this, null, '  ');
    };
    isValid(){
      return this.id && this.objectType && this.objectType === 'StatementRef';
    };

    show(){
      console.log(this.toString());
    };

    getType(){ return "StatementRef" };
  }


  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { Activity, StatementRef };
  } else {
    window.ADL.Activity = Activity;
    window.ADL.StatementRef = StatementRef;
  }

}
