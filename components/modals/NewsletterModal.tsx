"use client";

export default function NewsletterModal() {
  return (
    <>
      {/* Overlay */}
      <div className="bb-popnews-bg" />

      {/* Modal */}
      <div className="bb-popnews-box">

        {/* Close */}
        <div
          className="bb-popnews-close"
          title="Close"
        />

        <div className="row">

          {/* Image */}
          <div className="col-md-6 col-12">

            <img
              src="/assets/img/newsletter/newsletter.png"
              alt="newsletter"
            />

          </div>

          {/* Content */}
          <div className="col-md-6 col-12">

            <div className="bb-popnews-box-content">

              <h2>VaisKart</h2>

              <p>
                Subscribe to VaisKart and get future updates,
                offers, and new product notifications.
              </p>

              <form
                className="bb-popnews-form"
                action="#"
                method="post"
              >

                <input
                  type="email"
                  name="newsemail"
                  placeholder="Email Address"
                  required
                />

                <button
                  type="submit"
                  className="bb-btn-2"
                >
                  Subscribe
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}