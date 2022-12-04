
const Output = () => {
  const password = "this-is-generated-password";
  return (
    <>
      <div className="conatiner mb-3">
        <label className="form-label">Generated password</label>
        <input className="form-control" value={password} readOnly />
      </div>
    </>
  );
};

export default Output;