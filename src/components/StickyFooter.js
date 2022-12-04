const StickyFooter = () => {
  return (
    <div className="container d-flex flex-column h-100">
      <main className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">Sticky footer</h1>
          <p className="lead">
            Pin a footer to the bottom of the viewport in desktop browsers with
            this custom HTML and CSS.
          </p>
          <p>
            Use{" "}
            <a href="/docs/5.2/examples/sticky-footer-navbar/">
              the sticky footer with a fixed navbar
            </a>{" "}
            if need be, too.
          </p>
        </div>
      </main>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    </div>
  );
};

export default StickyFooter;
