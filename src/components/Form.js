function Form() {

    function funcionManejadora(e) {
        e.preventDefault();
    }

    return (
      <form>
          <input type="text" />
          <input type="text"/>
          <input type="submit" onClick={funcionManejadora}/>
      </form>
    );
  }
  
  export default Form;