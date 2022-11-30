const TestForm = () => {
  return (
    <>
      <div className="container mx-auto" style={{'max-width': '1000px'}}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
    </>
  );
};

export default TestForm;