import { useState } from "react";

function QRGenerator() {
  const [input, setInput] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQR = () => {
    if (!input.trim()) {
      alert("Please enter some text or URL");
      return;
    }

    setLoading(true); // Start loading spinner

    // Simulate delay like real API response
    setTimeout(() => {
      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        input
      )}&size=250x250`;
      setQrUrl(url);
      setLoading(false); // Stop loading spinner
    }, 1500); // Delay for 1.5 seconds to show spinner
  };

  const downloadQR = async () => {
    const response = await fetch(qrUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center mb-4 text-primary">
                QR Code Generator
              </h2>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter text or URL"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              {loading ? (
                <div className="d-flex justify-content-center mb-3">
                  <div className="spinner-super"></div>
                    <span className="ms-2">Generating QR Code...</span>
                </div>
              ) : (
                <button
                  className="btn btn-primary w-100 mb-3"
                  onClick={generateQR}
                >
                  Generate QR Code
                </button>
              )}

              {qrUrl && !loading && (
                <div className="text-center">
                  <img
                    src={qrUrl}
                    alt="QR Code"
                    className="img-thumbnail my-3"
                    width="200"
                    height="200"
                  />
                  <div>
                    <button className="btn btn-success" onClick={downloadQR}>
                      Download PNG
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRGenerator;
